# Autonomous Financial Consultant — 3D Reference Website Recreation

A high-fidelity recreation of the PeachWeb 3D Website UI ("Autonomous Financial Consultant"), originally featured on Pinterest and Instagram. Built using Next.js (App Router), Three.js, Tailwind CSS v4, Google Fonts (Outfit & Inter), and Web Audio API.

## 🌟 Key Features

### 1. 3D WebGL Scene (`Scene3D.tsx`)
- **Fluid Silk Shader Backdrop**: Custom GLSL vertex and fragment shaders reproducing the silky periwinkle-blue and deep navy fluid surface with moving caustic specular highlights.
- **Arching Glass Ribbon / Curve**: 3D parametric spline geometry with realistic glass refraction, thickness, transmission, and specular sheen mirroring the reference.
- **Central Floating Mercury / Glass Sphere**: Interactive floating bubble with reflective materials and subtle organic bobbing. Responds to hover and clicks.
- **Bottom-Right Deep Blue Dome**: Translucent cobalt glass dome anchoring the bottom right of the composition.
- **Dynamic Mouse Parallax & Dynamic Light**: Cursor movement controls 3D camera tilt and drives a specular point light across the scene.

### 2. UI & Design System
- **Exact Reference Typography**: Clean geometric typography with `Outfit` and `Inter`.
- **Headline**: "Autonomous Financial Consultant." with custom tracking and line height.
- **Navigation Bar**:
  - Brand mark: Golden `✦ Aura.AI` logo.
  - Floating frosted-glass pill menu: *Services*, *Work*, *About*, *Contact*.
  - Frosted capsule CTA: *Get Started* with circular arrow badge.
  - Audio toggle (mute / unmute ambient glass tones).
  - Mode switch (Reference Card Mockup vs. Fullscreen edge-to-edge).
- **Hero CTA**: Primary pill button ("Get Started" with arrow) + "Learn More" link.
- **Bottom Content**:
  - Left: Protocol status and counter (`01 // 04`).
  - Right: Reference description paragraph: *"Automate repetitive tasks across departments, reducing manual effort and increasing overall productivity."*

### 3. Interactive Enhancements
- **Interactive Modals**: Full modal dialogs for Services, Work benchmarks, Architecture, and Contact inquiries.
- **AI Consultation Simulator**: Enter enterprise parameters and watch real-time simulated financial optimization complete with confetti celebration.
- **Synthesized Web Audio**: Glass chimes and harmonic resonances on interactions using the Web Audio API without external audio assets.
- **Fluid Cursor Follower**: Smooth spring-damped outer halo with hover detection.

---

## 🚀 Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
