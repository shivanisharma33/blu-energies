"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "../utils/audio";
import {
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  ExternalLink,
  X,
  Maximize2,
  CheckCircle2,
} from "lucide-react";

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
        {/* TOP ROW: Headline & 3D Subsea Bathymetry Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                OUR ASSETS & OPERATIONS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6">
              Unlocking <br />
              Potential
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed max-w-md mb-8">
              High-potential deepwater assets in the West African margin, with exploration opportunities that can deliver meaningful, long-term value.
            </p>

            {/* White Pill Button: Explore Our Assets -> */}
            <div>
              <a
                href="https://www.blu-energies.com/assets-and-operations/overview/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playGlassPing()}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-[#31b1ba] text-[#0b1b33] hover:text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-black/30"
              >
                <span>Explore Our Assets</span>
                <ArrowRight className="w-4 h-4 text-[#31b1ba] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Subsea Bathymetry Cross-Section with Interactive Callouts */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-cyan-950/40 group">
              <img
                src="/subsea-bathymetry-block.jpg"
                alt="Subsea Hydrocarbon Basin Exploration Bathymetry"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Interactive Callout Tags (Matching mockup: SEISMIC MAPPING, PROSPECT IDENTIFICATION, RESOURCE EVALUATION) */}
              <div className="absolute right-4 top-8 flex flex-col gap-2.5">
                {[
                  "SEISMIC MAPPING",
                  "PROSPECT IDENTIFICATION",
                  "RESOURCE EVALUATION",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="px-3.5 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono tracking-wider text-cyan-200 flex items-center gap-2 shadow-lg"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#31b1ba] animate-pulse" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 3 Numbered Cards (01 Assets & Operations, 02 Our Team, 03 Exploration Opportunities) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => {
                soundFx.playGlassPing();
                setSelectedCard(card);
              }}
              className="group relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/15 hover:border-cyan-400/60 shadow-xl transition-all duration-500 bg-[#061426]"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020a14] via-[#020a14]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020a14]/50 via-transparent to-[#020a14]/90" />
              </div>

              {/* Number Badge Top Left */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-300">
                  {card.num}
                </span>

                <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Info: Title, Subtitle & Circular Arrow Button */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex items-end justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                {/* Circular Arrow Button (matching mockup) */}
                <div className="w-10 h-10 rounded-full border border-white/30 group-hover:border-cyan-400 bg-white/5 group-hover:bg-[#31b1ba] flex items-center justify-center shrink-0 text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
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
