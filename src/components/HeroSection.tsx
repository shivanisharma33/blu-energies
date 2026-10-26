"use client";

import React from "react";
import { soundFx } from "../utils/audio";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Compass,
  Layers,
  FileText,
  Flame,
  Globe,
  Radio,
  ChevronDown,
} from "lucide-react";

interface HeroSectionProps {
  onOpenModal: (section: "services" | "work" | "about" | "contact" | "consult") => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-18 py-6 sm:py-8 lg:py-10 select-none pointer-events-none w-full">
      {/* Top / Mid Hero Content Area (Restricted to Left Half) */}
      <div className="max-w-xl lg:max-w-xl xl:max-w-2xl mt-1 sm:mt-4 md:mt-6 pointer-events-auto">
        {/* Pre-Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-sky-200 shadow-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="font-semibold tracking-wider text-white">TSXV: BLU</span>
          <span className="text-white/40">•</span>
          <span className="text-sky-200/90 tracking-wide uppercase text-[11px]">
            Offshore West Africa Exploration
          </span>
        </div>

        {/* Arranged Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light text-white tracking-tight leading-[1.05] drop-shadow-md">
          A West Africa <br />
          <span className="font-semibold bg-gradient-to-r from-sky-200 via-sky-300 to-amber-200 bg-clip-text text-transparent">
            Deepwater
          </span>{" "}
          <br />
          <span className="font-medium text-white/95">
            Oil & Gas Explorer.
          </span>
        </h1>

        {/* Mission / Context Paragraph */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 font-light max-w-xl leading-relaxed">
          Unlocking multi-billion barrel hydrocarbon potential across prolific offshore West African basins through state-of-the-art 3D seismic imaging and frontier exploration drilling.
        </p>

        {/* Action Buttons Row */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
          {/* Primary CTA */}
          <a
            href="https://www.blu-energies.com/assets-and-operations/overview/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-white via-sky-50 to-sky-100 text-[#091b38] text-xs sm:text-sm font-semibold tracking-tight shadow-lg shadow-sky-950/30 hover:shadow-xl hover:shadow-sky-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
          >
            <span>Explore Assets & Drilling</span>
            <span className="w-5 h-5 rounded-full bg-[#091b38] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3" />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="https://www.blu-energies.com/investors/outlook/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="glass-pill px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4 text-emerald-300" />
            <span>Investor Outlook</span>
          </a>

          {/* Tertiary CTA: Presentation */}
          <a
            href="https://www.blu-energies.com/investors/presentations/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="glass-pill px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#e8bf6a]" />
            <span>Presentations</span>
          </a>
        </div>
      </div>

      {/* Floating Key Metrics HUD & Bottom Status (Confined to Left) */}
      <div className="w-full pt-6 sm:pt-8 pointer-events-auto">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl xl:max-w-2xl mb-4 sm:mb-6">
          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200/70 font-mono mb-1 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-sky-300" />
              <span>Target Region</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">
              West Africa
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">Offshore Transform Margin</div>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200/70 font-mono mb-1 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-emerald-300" />
              <span>Water Depth</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">
              1,500m – 3,000m
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">Subsea Turbidite Play</div>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200/70 font-mono mb-1 flex items-center gap-1.5">
              <Flame className="w-3 h-3 text-amber-300" />
              <span>Asset Focus</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">
              High-Impact Leads
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">3D Seismic Imaging Active</div>
          </div>

          <div className="glass-panel p-3.5 sm:p-4 rounded-2xl">
            <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-sky-200/70 font-mono mb-1 flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-sky-300" />
              <span>Public Listing</span>
            </div>
            <div className="text-sm sm:text-base font-semibold text-white font-mono">
              TSXV: BLU
            </div>
            <div className="text-[10px] text-white/50 mt-0.5">Venture Exchange</div>
          </div>
        </div>

        {/* Telemetry / Navigation Sub-Bar */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/70 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-white/90 font-medium">01 // 04</span>
            <span className="w-6 h-[1px] bg-white/30" />
            <span className="flex items-center gap-1.5 text-sky-200">
              <Compass className="w-3.5 h-3.5 text-sky-300 animate-spin-slow" />
              Subsea Seismic Telemetry: Lat 4°15&apos;N • Long 2°20&apos;W
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/60 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Offshore Compliance</span>
            </div>

            <a
              href="#about"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playGlassPing()}
              className="glass-pill px-3 py-1.5 rounded-full text-xs font-mono text-cyan-200 hover:text-white flex items-center gap-1.5 group transition-all cursor-pointer hover:border-cyan-400/50"
            >
              <span>Explore About Us</span>
              <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform animate-bounce text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
