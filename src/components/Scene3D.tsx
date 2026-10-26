"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Scene3DProps {
  reducedMotion?: boolean;
  opacity?: number;
}

export default function Scene3D({
  reducedMotion = false,
  opacity = 1.0,
}: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting System ---
    const ambientLight = new THREE.AmbientLight(0x7fa2ce, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(-3.5, 4.0, 5.0);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4b78b5, 1.6);
    fillLight.position.set(4.0, -2.0, 3.0);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xd9ebff, 2.2);
    rimLight.position.set(0, 5.0, -2.0);
    scene.add(rimLight);

    // Interactive mouse point light
    const mouseLight = new THREE.PointLight(0xa5c9ff, 3.5, 8);
    mouseLight.position.set(0, 0, 3);
    scene.add(mouseLight);

    // --- 3. Fluid Silk Background Shader ---
    const fluidVertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;

      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Gentle wave undulation
        float wave1 = sin(pos.x * 0.9 + uTime * 0.6) * cos(pos.y * 0.8 + uTime * 0.5) * 0.35;
        float wave2 = sin((pos.x + pos.y) * 1.2 + uTime * 0.8) * 0.18;
        pos.z += wave1 + wave2;

        vPosition = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fluidFragmentShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        
        // Dynamic fluid wave coordinates
        float wave = sin(p.x * 2.8 + uTime * 0.4 + sin(p.y * 3.2 - uTime * 0.3) * 1.5);
        float wave2 = cos(p.y * 2.5 - uTime * 0.5 + sin(p.x * 2.0 + uTime * 0.3) * 1.2);
        
        // Silky gradient color interpolation
        vec3 deepBlue = vec3(0.12, 0.22, 0.44);     // Deep indigo/navy #1f3870
        vec3 midBlue  = vec3(0.28, 0.47, 0.74);     // Sapphire #4778bd
        vec3 softBlue = vec3(0.58, 0.72, 0.89);     // Periwinkle/steel #94b8e3
        vec3 silver   = vec3(0.92, 0.96, 1.00);     // Glistening specular highlight

        float factor1 = smoothstep(-1.0, 1.0, wave);
        float factor2 = smoothstep(-1.0, 1.0, wave2);

        vec3 col = mix(deepBlue, midBlue, factor1);
        col = mix(col, softBlue, factor2 * 0.85);

        // Caustic highlight ripple
        float caustic = pow(max(0.0, sin((p.x + p.y * 0.8) * 4.0 + uTime * 0.7 + wave * 1.8)), 5.0);
        col += silver * caustic * 0.45;

        // Mouse glow subtle interaction
        float distToMouse = length(p - uMouse);
        float mouseGlow = smoothstep(1.2, 0.0, distToMouse) * 0.18;
        col += softBlue * mouseGlow;

        gl_FragColor = vec4(col, 0.22);
      }
    `;

    const fluidUniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const fluidMaterial = new THREE.ShaderMaterial({
      vertexShader: fluidVertexShader,
      fragmentShader: fluidFragmentShader,
      uniforms: fluidUniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const fluidPlaneGeo = new THREE.PlaneGeometry(36, 24, 64, 64);
    const fluidPlane = new THREE.Mesh(fluidPlaneGeo, fluidMaterial);
    fluidPlane.position.set(0, 0, -2.6);
    scene.add(fluidPlane);

    // --- 4. Event Listeners ---
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    setIsReady(true);

    // --- 5. Animation Render Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update fluid shader
      fluidUniforms.uTime.value = elapsedTime;
      fluidUniforms.uMouse.value.set(mx, my);

      // Mouse interactive light
      mouseLight.position.x = mx * 3.5;
      mouseLight.position.y = my * 2.5;

      if (!reducedMotion) {
        // Camera gentle parallax tilt
        camera.position.x = mx * 0.35;
        camera.position.y = my * 0.25;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      renderer.dispose();
      fluidPlaneGeo.dispose();
      fluidMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      style={{ cursor: "default", opacity, transition: "opacity 0.6s ease" }}
    >
      {!isReady && (
        <div className="absolute inset-0 bg-[#8ba4ca] flex items-center justify-center transition-opacity duration-700">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            <span className="text-xs uppercase tracking-widest text-white/70">
              Initializing 3D Engine...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
