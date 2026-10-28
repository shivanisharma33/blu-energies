"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { soundFx } from "../utils/audio";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Layers,
  Compass,
  TrendingUp,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 w-full min-h-[90vh] py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 bg-white text-[#0b1b33] select-none overflow-hidden"
    >
      {/* Background: Aerial Coastline Waves fading softly from right to white on left */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 overflow-hidden pointer-events-none z-0">
        <img
          src="/coastal-waves.jpg"
          alt="Coastal Ocean Waves"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Left Gradient Transition to Pure White */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Narrative, Features */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                ABOUT BLU ENERGIES
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-bold text-[#0b1b33] tracking-tight leading-[1.08] mb-6">
              Focused on <br />
              What&apos;s <span className="text-[#31b1ba]">Next.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed max-w-xl mb-6">
              BluEnergies Ltd. is a West Africa deepwater oil and gas explorer, focused on creating long-term value through the exploration and development of high-quality opportunities in proven and emerging basins.
            </p>

            {/* Link: Our Story -> */}
            <div className="mb-12">
              <Link
                href="/about"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playGlassPing()}
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#0b1b33] hover:text-[#31b1ba] transition-colors"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#31b1ba] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* 3 Pillars / Feature Items at Bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/90">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#31b1ba]/10 text-[#31b1ba] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b1b33] mb-1">
                    Experienced Team
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug font-light">
                    Proven track record in offshore exploration
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#31b1ba]/10 text-[#31b1ba] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b1b33] mb-1">
                    Strategic Assets
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug font-light">
                    High potential West African basins
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#31b1ba]/10 text-[#31b1ba] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b1b33] mb-1">
                    Disciplined Approach
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug font-light">
                    Focused on sustainable, long-term value
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Dark Glassmorphic TSXV BLU Ticker Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm rounded-2xl bg-[#061528]/95 backdrop-blur-xl border border-white/15 p-7 text-white shadow-2xl shadow-slate-900/40"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold tracking-wider text-white font-sans flex items-center gap-2">
                  <span>TSXV:</span>
                  <span className="text-[#31b1ba]">BLU</span>
                </h3>

                <a
                  href="https://www.blu-energies.com/investors/stock-information/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-cyan-300 hover:text-white transition-all"
                  title="TSXV: BLU Quote"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-cyan-200/70 font-mono mb-6">
                Real-time market data
              </div>

              {/* Ticker Data Table */}
              <div className="space-y-3.5 text-sm font-mono border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Last</span>
                  <span className="font-bold text-white text-base">2.14</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Change</span>
                  <span className="font-bold text-emerald-400 text-sm">
                    +0.06 (+2.63%)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">High</span>
                  <span className="font-semibold text-white">2.15</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Low</span>
                  <span className="font-semibold text-white">2.08</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Volume</span>
                  <span className="font-semibold text-white">38,492</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
