"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "../utils/audio";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function InvestorsSection() {
  return (
    <section
      id="investors"
      className="relative z-20 w-full py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 bg-gradient-to-b from-white via-slate-50 to-white text-[#0b1b33] select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Investment Thesis */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                FOR INVESTORS
              </span>
            </div>

            {/* Headline matching screenshot */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0b1b33] tracking-tight leading-[1.08] mb-6">
              A Compelling <br />
              Opportunity.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-md mb-8">
              Exposure to high-potential West African deepwater assets, supported by an experienced team and a disciplined exploration strategy.
            </p>

            {/* Pill Button: Investor Overview -> */}
            <div>
              <a
                href="https://www.blu-energies.com/investors/outlook/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playGlassPing()}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-slate-300 hover:border-[#0b1b33] bg-white hover:bg-[#0b1b33] text-[#0b1b33] hover:text-white font-medium text-sm transition-all duration-300 shadow-md"
              >
                <span>Investor Overview</span>
                <ArrowRight className="w-4 h-4 text-[#31b1ba] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Split Panoramic Card (Vessel Photo on Left + White TSXV Quote Card on Right) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-200/70 bg-white grid grid-cols-1 md:grid-cols-12 min-h-[360px]"
            >
              {/* Left Half: Offshore Support Vessel Image */}
              <div className="md:col-span-6 relative overflow-hidden h-60 md:h-auto">
                <img
                  src="/offshore-vessel.jpg"
                  alt="Offshore Support Vessel in Ocean"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-white/10" />
              </div>

              {/* Right Half: Clean TSXV BLU Financial Data Table */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-wider text-[#0b1b33] font-sans flex items-center gap-1.5">
                      <span>TSXV:</span>
                      <span className="text-[#31b1ba]">BLU</span>
                    </h3>

                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Stock Metrics */}
                  <div className="space-y-3 font-mono text-sm border-t border-slate-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Last</span>
                      <span className="font-bold text-[#0b1b33] text-base">2.14</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Change</span>
                      <span className="font-bold text-emerald-600 text-sm">
                        +0.06 (+2.63%)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">High</span>
                      <span className="font-semibold text-[#0b1b33]">2.15</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Low</span>
                      <span className="font-semibold text-[#0b1b33]">2.08</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Volume</span>
                      <span className="font-semibold text-[#0b1b33]">38,492</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Link: View Investor Information -> */}
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <a
                    href="https://www.blu-energies.com/investors/stock-information/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-[#31b1ba] hover:text-[#0b1b33] transition-colors"
                  >
                    <span>View Investor Information</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
