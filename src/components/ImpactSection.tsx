"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "../utils/audio";
import {
  ArrowRight,
  Globe2,
  Users2,
  ShieldCheck,
  SunMedium,
} from "lucide-react";

export default function ImpactSection() {
  const impacts = [
    {
      icon: <Globe2 className="w-5 h-5 text-cyan-300" />,
      title: "Environmental Stewardship",
      description: "Minimizing our environmental impact",
    },
    {
      icon: <Users2 className="w-5 h-5 text-cyan-300" />,
      title: "Local Communities",
      description: "Supporting local development",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-300" />,
      title: "Responsible Operations",
      description: "Driving safe and efficient operations",
    },
    {
      icon: <SunMedium className="w-5 h-5 text-cyan-300" />,
      title: "A Stronger Tomorrow",
      description: "Creating long-term value",
    },
  ];

  return (
    <section
      id="impact"
      className="relative z-20 w-full min-h-[85vh] py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-20 text-white select-none overflow-hidden flex items-center"
    >
      {/* Background: Aerial Coastline Waves with Left Contrast Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src="/coastal-waves.jpg"
          alt="Aerial Coastal Waves"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Contrast Gradient: Dark on left so text is crisp, revealing the dramatic waves on the right */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#020a14]/95 via-[#030e1d]/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#040e1d] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Mission */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                OUR IMPACT
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
              Responsible <br />
              Exploration <br />
              for a <span className="text-[#31b1ba]">Brighter</span> <br />
              <span className="text-[#31b1ba]">Tomorrow.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl mb-8">
              We are committed to responsible exploration, environmental stewardship and creating long-term value for our stakeholders and the communities where we operate.
            </p>

            {/* Pill Button: Sustainability Approach -> */}
            <div>
              <a
                href="https://www.blu-energies.com/corporate/corporate-governance/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playGlassPing()}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/40 bg-white/10 hover:bg-white hover:text-[#0b1b33] text-white font-medium text-sm transition-all duration-300 shadow-xl backdrop-blur-md"
              >
                <span>Sustainability Approach</span>
                <ArrowRight className="w-4 h-4 text-[#31b1ba] group-hover:text-[#0b1b33] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Circular Icon Feature Rows */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-cyan-400 bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
