"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { soundFx } from "../utils/audio";
import { ArrowRight, Award, Layers, Compass } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    num: "01",
    icon: Award,
    title: "Experienced Team",
    description: "Proven track record in offshore exploration.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Strategic Assets",
    description: "High potential West African basins.",
  },
  {
    num: "03",
    icon: Compass,
    title: "Disciplined Approach",
    description: "Focused on sustainable, long-term value.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 w-full py-24 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 bg-white text-[#0b1b33] select-none overflow-hidden"
    >
      {/* Soft ambient tint instead of a hard photo edge */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-[#31b1ba]/[0.07] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full bg-sky-200/30 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top: headline left, intro copy right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#31b1ba]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                About Blu Energies
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-semibold text-[#0b1b33] tracking-tight leading-[1.02]">
              Focused on <br />
              What&apos;s <span className="text-[#31b1ba]">Next.</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pb-3" delay={0.15}>
            <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed mb-8">
              BluEnergies Ltd. is a West Africa deepwater oil and gas explorer, focused on creating long-term value through the exploration and development of high-quality opportunities in proven and emerging basins.
            </p>

            <Link
              href="/about"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playGlassPing()}
              className="group inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-slate-300 hover:border-[#0b1b33] hover:bg-[#0b1b33] text-sm font-semibold text-[#0b1b33] hover:text-white transition-all duration-300"
            >
              <span>Our Story</span>
              <span className="w-9 h-9 rounded-full bg-[#31b1ba] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Bottom: numbered pillars */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
          {PILLARS.map(({ num, icon: Icon, title, description }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative pt-8 pb-4 md:px-8 ${
                i === 0 ? "md:pl-0" : "md:border-l border-slate-200"
              } ${i > 0 ? "border-t md:border-t-0 border-slate-200 mt-4 md:mt-0" : ""}`}
            >
              {/* Accent line grows on hover */}
              <span className="absolute top-[-1px] left-0 h-[2px] w-0 bg-[#31b1ba] transition-all duration-500 group-hover:w-full md:group-hover:w-[calc(100%-2rem)]" />

              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-mono text-slate-400">{num}</span>
                <Icon className="w-5 h-5 text-[#31b1ba] transition-transform duration-500 group-hover:-translate-y-1" />
              </div>

              <h3 className="text-2xl font-serif font-semibold text-[#0b1b33] mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
