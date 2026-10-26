"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const clickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(!!clickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Trailing lerp loop
    let animId: number;
    const lerpLoop = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailing({ x: currentX, y: currentY });
      animId = requestAnimationFrame(lerpLoop);
    };
    animId = requestAnimationFrame(lerpLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Halo */}
      <div
        className="absolute rounded-full transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isPointer ? "48px" : "32px",
          height: isPointer ? "48px" : "32px",
          backgroundColor: isPointer
            ? "rgba(232, 191, 106, 0.15)"
            : "rgba(255, 255, 255, 0.12)",
          border: isPointer
            ? "1px solid rgba(232, 191, 106, 0.5)"
            : "1px solid rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Inner Crisp Dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 shadow-sm pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
