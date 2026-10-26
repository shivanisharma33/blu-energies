"use client";

import React, { useState } from "react";
import Scene3D from "../components/Scene3D";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import InteractiveModal from "../components/InteractiveModal";
import AiConsultationModal from "../components/AiConsultationModal";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  const [activeModal, setActiveModal] = useState<
    "services" | "work" | "about" | "contact" | null
  >(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const handleOpenModal = (
    section: "services" | "work" | "about" | "contact" | "consult"
  ) => {
    if (section === "consult") {
      setIsConsultOpen(true);
    } else {
      setActiveModal(section);
    }
  };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth flex flex-col bg-[#040d1a]">
      {/* Custom Fluid Trailing Cursor */}
      <CustomCursor />

      {/* SECTION 1: HERO VIEWPORT (100dvh) */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden">
        {/* Offshore Mining Discovery Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <img
            src="/bluenergies-discovery.webp"
            alt="Blu Energies Offshore Mining Discovery"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: "scaleX(-1)",
              objectPosition: "25% 65%",
            }}
          />
          {/* Left-Side Contrast Overlay (leaves right-side ship/rig 100% visible) */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#040d1a]/95 via-[#040d1a]/60 to-transparent" />
          {/* Subtle top & bottom edge softening */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040d1a]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#040d1a] to-transparent" />
        </div>

        {/* 3D WebGL Canvas Layer - Full Viewport */}
        <Scene3D opacity={0.7} />

        {/* Main UI Overlay - Full Viewport Layout */}
        <div className="relative z-10 w-full h-full flex-1 flex flex-col justify-between">
          <Navigation
            onOpenModal={handleOpenModal}
            activeSection={activeModal}
          />

          <HeroSection onOpenModal={handleOpenModal} />
        </div>
      </section>

      {/* SECTION 2: ABOUT US SECTION (Advanced & Attractive, matching user data) */}
      <AboutSection />

      {/* Section Content Modals (Services, Work, About, Contact) */}
      <InteractiveModal
        isOpen={!!activeModal}
        section={activeModal}
        onClose={() => setActiveModal(null)}
        onOpenConsult={() => setIsConsultOpen(true)}
      />

      {/* AI Consultation Simulation Modal */}
      <AiConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </main>
  );
}
