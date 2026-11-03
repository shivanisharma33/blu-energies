"use client";

import React, { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import HeroVideo from "../components/HeroVideo";
import MarqueeBand from "../components/MarqueeBand";
import WaveDivider from "../components/WaveDivider";
import AboutSection from "../components/AboutSection";
import AssetsOperationsSection from "../components/AssetsOperationsSection";
import ImpactSection from "../components/ImpactSection";
import InvestorsSection from "../components/InvestorsSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
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

      {/* =========================================================================
          SECTION 1: HERO VIEWPORT (100dvh - HD sea & ship video background)
         ========================================================================= */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden">
        <HeroVideo />

        {/* Main UI Overlay - Full Viewport Layout */}
        <div className="relative z-10 w-full h-full flex-1 flex flex-col justify-between">
          <Navigation
            onOpenModal={handleOpenModal}
            activeSection={activeModal}
          />

          <HeroSection onOpenModal={handleOpenModal} />
        </div>
      </section>

      {/* Scrolling highlights band */}
      <MarqueeBand />
      <WaveDivider from="#040d1a" to="#ffffff" />

      {/* =========================================================================
          SECTION 2: ABOUT BLU ENERGIES (Focused on What's Next.)
         ========================================================================= */}
      <AboutSection />
      <WaveDivider from="#ffffff" to="#040e1d" flip />

      {/* =========================================================================
          SECTION 3: OUR ASSETS & OPERATIONS (Unlocking Potential)
         ========================================================================= */}
      <AssetsOperationsSection />

      {/* =========================================================================
          SECTION 4: OUR IMPACT (Responsible Exploration for a Brighter Tomorrow.)
         ========================================================================= */}
      <ImpactSection />

      {/* =========================================================================
          SECTION 5: FOR INVESTORS (A Compelling Opportunity.)
         ========================================================================= */}
      <InvestorsSection />
      <WaveDivider from="#ffffff" to="#040e1d" />

      {/* =========================================================================
          SECTION 6: NEWS & MEDIA (Latest Updates)
         ========================================================================= */}
      <NewsSection />

      {/* =========================================================================
          SECTION 7: CORPORATE FOOTER
         ========================================================================= */}
      <Footer />

      {/* Interactive Modals (Navigation services, work, about, contact) */}
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
