"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "../utils/audio";
import { ArrowRight, ExternalLink, X, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

interface AssetCard {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  details: {
    description: string;
    metrics: { label: string; value: string }[];
    points: string[];
  };
}

export default function AssetsOperationsSection() {
  const [selectedCard, setSelectedCard] = useState<AssetCard | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const cards: AssetCard[] = [
    {
      id: "card-1",
      num: "01",
      title: "Assets & Operations",
      subtitle: "Strategic offshore assets in proven basins.",
      image: "/assets-operations.jpg",
      link: "https://www.blu-energies.com/assets-and-operations/overview/",
      details: {
        description:
          "Targeting multi-billion barrel hydrocarbon potential across prolific offshore West African deepwater basin floor fan plays.",
        metrics: [
          { label: "Water Depth", value: "2,500m+" },
          { label: "Target Formation", value: "Basin Floor Fan" },
          { label: "Concession", value: "100% Operated" },
        ],
        points: [
          "Regional 3D PSDM seismic reprocessing delivering unprecedented sub-salt clarity",
          "Direct analogue to prolific offshore discoveries along the Equatorial Atlantic Margin",
          "Modern deepwater drillship readiness and strict environmental stewardship",
        ],
      },
    },
    {
      id: "card-2",
      num: "02",
      title: "Our Team",
      subtitle: "A skilled and experienced team with a focus on operational excellence.",
      image: "/engineers-offshore.jpg",
      link: "https://www.blu-energies.com/corporate/board-management/",
      details: {
        description:
          "Guided by industry pioneers with decades of cumulative frontier exploration, major oilfield discoveries, and cross-border commercial execution.",
        metrics: [
          { label: "Cumulative Experience", value: "40+ Years" },
          { label: "Execution Track", value: "Global E&P" },
          { label: "Advisory Board", value: "World-Class" },
        ],
        points: [
          "Proven executive management team with track records at major international oil companies",
          "World-class geoscientists and basin specialists in West African transform margins",
          "Deep strategic ties with African national petroleum ministries and global service partners",
        ],
      },
    },
    {
      id: "card-3",
      num: "03",
      title: "Exploration Opportunities",
      subtitle: "High quality leads with material resource potential.",
      image: "/seismic-wireframe.jpg",
      link: "https://www.blu-energies.com/assets-and-operations/overview/",
      details: {
        description:
          "Extensive inventory of high-amplitude exploration prospects identified through comprehensive high-resolution 3D seismic imaging.",
        metrics: [
          { label: "Seismic Coverage", value: "3,000+ sq km" },
          { label: "Lead Inventory", value: "Multiple Prospects" },
          { label: "Upside Potential", value: "High Leverage" },
        ],
        points: [
          "Multiple amplitude-supported fan complexes derisked with AVO analysis",
          "Active pre-drill geological modeling and seabed bathymetry surveys",
          "Robust pipeline of actionable drilling targets along the margin",
        ],
      },
    },
  ];

  return (
    <section
      id="assets-operations"
      className="relative z-20 w-full py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 bg-[#040e1d] text-white select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header: headline left, intro copy right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 lg:mb-20">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#31b1ba]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                Our Assets &amp; Operations
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-semibold text-white tracking-tight leading-[1.02]">
              Unlocking <br />
              <span className="text-[#31b1ba]">Potential.</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pb-3" delay={0.15}>
            <p className="text-lg sm:text-xl text-white/65 font-light leading-relaxed mb-8">
              High-potential deepwater assets in the West African margin, with exploration opportunities that can deliver meaningful, long-term value.
            </p>

            <a
              href="https://www.blu-energies.com/assets-and-operations/overview/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playGlassPing()}
              className="group inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-white hover:bg-[#31b1ba] text-sm font-semibold text-[#0b1b33] hover:text-white transition-all duration-300"
            >
              <span>Explore Our Assets</span>
              <span className="w-9 h-9 rounded-full bg-[#0b1b33] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Expanding panel gallery: the active panel opens wide, the rest collapse to strips */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:h-[580px]">
          {cards.map((card, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  if (!isActive) {
                    soundFx.playHover();
                    setActiveIdx(idx);
                  }
                }}
                onClick={() => setActiveIdx(idx)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ring-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "h-[520px] lg:h-auto lg:grow-[5] ring-[#31b1ba]/50 shadow-2xl shadow-cyan-950/50"
                    : "h-[110px] lg:h-auto lg:grow ring-white/10 hover:ring-white/25"
                } lg:basis-0`}
              >
                {/* Photo */}
                <img
                  src={card.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out ${
                    isActive ? "scale-100" : "scale-125 grayscale-[40%]"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    isActive ? "bg-[#020a14]/20" : "bg-[#020a14]/70 group-hover:bg-[#020a14]/55"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020a14] via-[#020a14]/30 to-transparent" />

                {/* Collapsed state: number + title (vertical on desktop) */}
                <div
                  className={`absolute inset-0 p-6 flex lg:flex-col items-center lg:items-start justify-between transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-300"
                  }`}
                >
                  <span className="text-xs font-mono tracking-widest text-[#31b1ba]">{card.num}</span>
                  <h3 className="text-lg lg:text-xl font-serif font-semibold text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
                    {card.title}
                  </h3>
                </div>

                {/* Expanded state */}
                <div
                  className={`absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-300"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs font-mono tracking-widest text-white">
                      {card.num} <span className="text-white/40">/ 0{cards.length}</span>
                    </span>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      tabIndex={isActive ? 0 : -1}
                      aria-label={`Visit ${card.title} page`}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#0b1b33] flex items-center justify-center text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="max-w-xl">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-[1.05] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed mb-6">
                      {card.subtitle}
                    </p>

                    {/* Key figures */}
                    <div className="hidden sm:grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                      {card.details.metrics.map((m) => (
                        <div key={m.label} className="bg-[#020a14]/50 px-4 py-3">
                          <div className="text-sm lg:text-base font-semibold text-white">{m.value}</div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      tabIndex={isActive ? 0 : -1}
                      onClick={(e) => {
                        e.stopPropagation();
                        soundFx.playGlassPing();
                        setSelectedCard(card);
                      }}
                      className="group/btn inline-flex items-center gap-4 pl-5 pr-1.5 py-1.5 rounded-full bg-white text-sm font-semibold text-[#0b1b33] hover:bg-[#31b1ba] hover:text-white transition-colors duration-300"
                    >
                      <span>View details</span>
                      <span className="w-8 h-8 rounded-full bg-[#0b1b33] text-white flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Active indicator bar */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#31b1ba] transition-all duration-700 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                soundFx.playChime(440, 0.15);
                setSelectedCard(null);
              }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#061528] border border-cyan-500/30 text-white shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061528] via-[#061528]/60 to-transparent" />

                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                    {selectedCard.num} • Strategy
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {selectedCard.details.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  {selectedCard.details.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[11px] text-white/50 mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-cyan-300">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Key Points */}
                <div className="space-y-2">
                  {selectedCard.details.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-[#31b1ba] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={selectedCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#31b1ba] hover:bg-cyan-500 text-white font-medium text-xs shadow-md transition-all"
                  >
                    <span>View More Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
