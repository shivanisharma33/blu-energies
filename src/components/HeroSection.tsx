"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "../utils/audio";
import { ArrowRight, TrendingUp, FileText, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: (section: "services" | "work" | "about" | "contact" | "consult") => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

const STATS = [
  { value: "1,500–3,000m", label: "Water depth" },
  { value: "West Africa", label: "Transform margin" },
  { value: "3D Seismic", label: "Imaging active" },
  { value: "TSXV: BLU", label: "Venture Exchange" },
];

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-18 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 select-none pointer-events-none w-full">
      {/* Headline Block */}
      <div className="max-w-3xl pointer-events-auto">
        {/* Pre-Header Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-sky-200 shadow-md mb-6 sm:mb-8"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-semibold tracking-wider text-white">TSXV: BLU</span>
          <span className="text-white/40">•</span>
          <span className="text-sky-200/90 tracking-wide uppercase text-[11px]">
            Offshore West Africa Exploration
          </span>
        </motion.div>

        {/* Headline: masked line-by-line reveal */}
        <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-white tracking-tight leading-[1.02] drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)]">
          {[
            <span key="l1">A West Africa</span>,
            <span
              key="l2"
              className="font-serif font-medium bg-gradient-to-r from-sky-200 via-cyan-200 to-amber-200 bg-clip-text text-transparent pr-2"
            >
              Deepwater
            </span>,
            <span key="l3" className="font-medium">Oil &amp; Gas Explorer.</span>,
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.14, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          {...fadeUp(0.8)}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-white/80 font-light max-w-xl leading-relaxed"
        >
          Unlocking multi-billion barrel hydrocarbon potential across prolific offshore West African basins through state-of-the-art 3D seismic imaging and frontier exploration drilling.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1)} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
          <a
            href="https://www.blu-energies.com/assets-and-operations/overview/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="group relative overflow-hidden pl-6 pr-2 py-2 rounded-full bg-white text-[#091b38] text-sm font-semibold tracking-tight shadow-xl shadow-sky-950/40 hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-4"
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-sky-200/70 to-transparent skew-x-12 animate-shimmer" />
            <span className="relative">Explore Assets &amp; Drilling</span>
            <span className="relative w-9 h-9 rounded-full bg-[#091b38] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="https://www.blu-energies.com/investors/outlook/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="glass-pill px-5 py-3.5 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>Investor Outlook</span>
          </a>

          <a
            href="https://www.blu-energies.com/investors/presentations/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="px-2 py-3 text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <FileText className="w-3.5 h-3.5 text-[#e8bf6a]" />
            <span>Presentations</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom: single stat bar + scroll cue */}
      <motion.div
        {...fadeUp(1.2)}
        className="w-full pt-10 sm:pt-12 pointer-events-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 pr-0 sm:pr-14"
      >
        <div className="glass-panel rounded-2xl grid grid-cols-2 sm:grid-cols-4 divide-white/10 sm:divide-x max-w-3xl w-full">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-4">
              <div className="text-base sm:text-lg font-semibold text-white whitespace-nowrap">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-sky-200/70 font-mono mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#about"
          onMouseEnter={() => soundFx.playHover()}
          onClick={() => soundFx.playGlassPing()}
          className="group hidden sm:flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          <span className="relative w-6 h-10 rounded-full border border-white/40 flex justify-center pt-2">
            <span className="w-1 h-2 rounded-full bg-cyan-300 animate-scroll-dot" />
          </span>
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
