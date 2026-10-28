"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { soundFx } from "../utils/audio";
import {
  Compass,
  Users,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  X,
  Share2,
  Maximize2,
  Activity,
} from "lucide-react";

// Types
interface ExplorePillar {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  primaryLink: string;
  buttonLabel: string;
}

interface NewsItem {
  id: string;
  date: string;
  rawDate: string;
  title: string;
  category: "Advisory" | "Financing" | "Markets";
  summary: string;
  fullContent: string[];
  externalUrl: string;
  isMilestone?: boolean;
}

export default function ExploreSection() {
  const [selectedPillar, setSelectedPillar] = useState<ExplorePillar | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);

  // Exploration Pillars Data (Exact Data from User Screenshot: Assets & Operations, Our Team, Investors)
  const pillars: ExplorePillar[] = [
    {
      id: "assets",
      title: "Assets & Operations",
      subtitle: "West African Deepwater Basin Exploration",
      category: "Operations",
      image: "/assets-operations.jpg",
      badge: "Deepwater Frontier",
      description:
        "Targeting multi-billion barrel hydrocarbon potential across high-prolific offshore basin floor fan plays with advanced 3D seismic multi-client imaging.",
      stats: [
        { label: "Water Depth", value: "2,500m+" },
        { label: "Play Model", value: "Basin Floor Fan" },
        { label: "Acreage License", value: "100% Operated" },
      ],
      highlights: [
        "Regional 3D PSDM seismic reprocessing delivering unprecedented sub-salt clarity",
        "Direct analogue to prolific offshore discoveries along the Equatorial Atlantic Margin",
        "Modern deepwater drillship readiness and strict environmental stewardship",
      ],
      primaryLink: "https://www.blu-energies.com/assets-and-operations/overview/",
      buttonLabel: "Assets & Operations",
    },
    {
      id: "team",
      title: "Our Team",
      subtitle: "Seasoned E&P Leadership & Technical Board",
      category: "Governance",
      image: "/team-boardroom.jpg",
      badge: "Executive Leadership",
      description:
        "Guided by industry pioneers with decades of cumulative frontier exploration, major oilfield discoveries, and cross-border commercial execution.",
      stats: [
        { label: "Industry Exp", value: "40+ Years" },
        { label: "Discovery Record", value: "Global E&P" },
        { label: "Governance", value: "Independent Board" },
      ],
      highlights: [
        "Proven executive management team with track records at major international oil companies",
        "World-class geoscientists and basin specialists in West African transform margins",
        "Deep strategic ties with African national petroleum ministries and global service partners",
      ],
      primaryLink: "https://www.blu-energies.com/corporate/board-management/",
      buttonLabel: "Our Team",
    },
    {
      id: "investors",
      title: "Investors",
      subtitle: "TSXV: BLU • High-Impact Discovery Leverage",
      category: "Capital Markets",
      image: "/investors-financials.jpg",
      badge: "TSXV: BLU",
      description:
        "Offering institutional and retail investors asymmetric upside exposure to frontier exploration milestones, backed by a disciplined capital allocation model.",
      stats: [
        { label: "Ticker Symbol", value: "TSXV: BLU" },
        { label: "Recent Raise", value: "C$20.7 Million" },
        { label: "Structure", value: "Clean Balance Sheet" },
      ],
      highlights: [
        "Successfully closed C$20.7M oversubscribed non-brokered private placement",
        "Fully funded exploration work programs including high-resolution seismic interpretation",
        "Continuous regulatory compliance, SEDAR+ filings, and regular investor presentations",
      ],
      primaryLink: "https://www.blu-energies.com/investors/outlook/",
      buttonLabel: "Investors",
    },
  ];

  // News Items Data (Exact "Old Data" from User Screenshot)
  const newsItems: NewsItem[] = [
    {
      id: "news-1",
      date: "09.14.26",
      rawDate: "September 14, 2026",
      title: "BluEnergies Announces Advisory Agreements",
      category: "Advisory",
      summary:
        "BluEnergies Ltd. has entered into strategic advisory agreements with international deepwater energy specialists to accelerate exploration planning.",
      fullContent: [
        "VANCOUVER, BC / ACCESSWIRE / September 14, 2026 / BluEnergies Ltd. (TSXV:BLU) ('BluEnergies' or the 'Company') announces that it has entered into strategic advisory and consulting agreements with leading deepwater exploration specialists.",
        "Under the terms of the agreements, the advisors will provide technical guidance on seismic data reprocessing, prospect inventory prioritization, and farm-in partner marketing for the Company's offshore West African concessions.",
        "'We are thrilled to bring on world-class technical and commercial advisors who have been directly involved in some of the most significant deepwater discoveries along the West African margin over the past decade,' said the Chief Executive Officer.",
        "The advisory agreements include performance-based equity milestones aligned with exploration success and shareholder value creation.",
      ],
      externalUrl: "https://www.blu-energies.com/news-and-media/news/",
      isMilestone: false,
    },
    {
      id: "news-2",
      date: "07.23.26",
      rawDate: "July 23, 2026",
      title:
        "BluEnergies Announces Closing of Non-Brokered Private Placement of Units for Gross Proceeds of C$20.7 Million",
      category: "Financing",
      summary:
        "BluEnergies successfully completes its non-brokered private placement, raising gross proceeds of C$20,700,000 to fully fund deepwater seismic programs and pre-drilling milestones.",
      fullContent: [
        "VANCOUVER, BC / ACCESSWIRE / July 23, 2026 / BluEnergies Ltd. (TSXV:BLU) ('BluEnergies' or the 'Company') is pleased to announce the closing of its previously announced upsized non-brokered private placement of units at an issue price of C$2.10 per unit for aggregate gross proceeds of C$20,700,000.",
        "Each Unit consists of one common share of the Company and one-half of one transferable common share purchase warrant. Each whole warrant entitles the holder to purchase one additional common share at an exercise price of C$2.75 for a period of 24 months from closing.",
        "Gross proceeds will be utilized for high-resolution 3D PSDM seismic data licensing and reprocessing, basin modeling, environmental baseline work, and general working capital purposes.",
        "'Closing this C$20.7M financing with key strategic and institutional energy funds positions BluEnergies in a position of premier financial strength to systematically unlock our deepwater frontier play,' commented the Chief Financial Officer.",
      ],
      externalUrl: "https://www.blu-energies.com/news-and-media/news/",
      isMilestone: true,
    },
    {
      id: "news-3",
      date: "07.21.26",
      rawDate: "July 21, 2026",
      title:
        "BluEnergies Announces Upsize of Non-Brokered Private Placement of Units for Gross Proceeds of Up to C$20,700,000",
      category: "Markets",
      summary:
        "Owing to significant institutional demand from global energy funds, BluEnergies upsized its private placement to C$20,700,000.",
      fullContent: [
        "VANCOUVER, BC / ACCESSWIRE / July 21, 2026 / BluEnergies Ltd. (TSXV:BLU) ('BluEnergies' or the 'Company') announces that due to substantial institutional investor interest, it has upsized its non-brokered private placement offering to up to C$20,700,000.",
        "The upsized placement reflects strong market confidence in BluEnergies' deepwater West African asset package and exploration strategy.",
        "All securities issued pursuant to the offering are subject to a statutory hold period expiring four months and one day from the date of closing in accordance with applicable Canadian securities laws.",
      ],
      externalUrl: "https://www.blu-energies.com/news-and-media/news/",
      isMilestone: false,
    },
  ];

  // Confetti trigger for financial milestone news
  const triggerFinancingCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#31b1ba", "#0b1b33", "#e5b869", "#ffffff"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleOpenNews = (news: NewsItem) => {
    soundFx.playGlassPing();
    setSelectedNews(news);
    if (news.isMilestone) {
      triggerFinancingCelebration();
    }
  };

  const handleOpenPillar = (pillar: ExplorePillar) => {
    soundFx.playGlassPing();
    setSelectedPillar(pillar);
  };

  const handleCopyLink = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  return (
    <section
      id="explore"
      className="relative z-20 w-full py-20 sm:py-28 px-4 sm:px-8 md:px-14 lg:px-20 bg-gradient-to-b from-white via-[#f0f6fa] to-[#e4eef6] text-[#0b1b33] select-none overflow-hidden border-t border-slate-200"
    >
      {/* Luminous Ambient Gradient Backdrops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Gradient Edge Accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#31b1ba] to-transparent" />

        {/* Soft Radial Ambient Orbs */}
        <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/35 via-sky-200/25 to-blue-200/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 -left-24 w-[520px] h-[520px] bg-gradient-to-tr from-teal-200/30 via-cyan-100/25 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-gradient-to-tl from-sky-200/35 via-indigo-100/20 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* =========================================================================
            HEADER & VERTICAL EXPLORE BRANDING
           ========================================================================= */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 sm:mb-16">
          {/* Left Side: Vertical Explore Indicator with Gradient Accent */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-start pt-3">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[13px] tracking-[0.25em] text-[#31b1ba] font-mono font-semibold uppercase rotate-180 [writing-mode:vertical-rl] select-none">
                Explore
              </span>
              <div className="w-[1.5px] h-28 bg-gradient-to-b from-[#31b1ba] via-cyan-400/40 to-transparent" />
            </div>
          </div>

          {/* Center & Right Title */}
          <div className="lg:col-span-11 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {/* Gradient Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#31b1ba]/15 to-sky-500/15 border border-[#31b1ba]/30 text-[#0e7480] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#31b1ba] animate-pulse" />
                <span>Strategic Horizons</span>
              </div>

              {/* Gradient Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b1b33] tracking-tight leading-tight">
                Explore{" "}
                <span className="bg-gradient-to-r from-[#0b1b33] via-[#1a4b7c] to-[#31b1ba] bg-clip-text text-transparent">
                  BluEnergies
                </span>
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
                Explore our deepwater operations, executive team, and market intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 1: THREE ELEGANT CINEMATIC EXPLORE CARDS WITH GRADIENT HOVERS
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-28">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative h-[460px] sm:h-[490px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/90 hover:border-[#31b1ba]/70 bg-[#061426]"
            >
              {/* Background Image with Cinematic Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Contrast Gradients: Keeps photo vibrant while ensuring button & text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101e]/95 via-[#04101e]/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#04101e]/30 via-transparent to-[#04101e]/70" />
                {/* Subtle Interactive Sheen on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Top Bar: Tag & Quick Preview Icon */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-black/40 backdrop-blur-md text-white border border-white/20">
                  {pillar.badge}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenPillar(pillar);
                  }}
                  title="Inspect Details"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Card Content: Pill Button & Subtitle */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#31b1ba] mb-1 drop-shadow-sm">
                  {pillar.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug mb-4">
                  {pillar.title}
                </h3>

                {/* Elevated Modern Pill Button with Gradient Hover State */}
                <a
                  href={pillar.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playGlassPing();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#31b1ba] hover:to-cyan-500 text-[#0b1b33] hover:text-white font-medium text-sm flex items-center justify-between shadow-xl shadow-black/25 transition-all duration-300 group/btn"
                >
                  <span className="tracking-wide font-semibold">
                    {pillar.buttonLabel}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#31b1ba] group-hover/btn:text-white group-hover/btn:translate-x-1.5 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            PART 2: REGULATORY NEWSROOM WITH GRADIENT DIVIDER & CARDS
           ========================================================================= */}
        <div className="pt-6 relative">
          {/* Subtle Glowing Horizontal Gradient Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#31b1ba]/40 to-transparent mb-10" />

          {/* News Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#31b1ba] mb-1">
                <Activity className="w-3.5 h-3.5" />
                <span>Official Disclosures & Wire</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0b1b33] to-[#1e3a5f] bg-clip-text text-transparent tracking-tight">
                News
              </h3>
            </div>

            <a
              href="https://www.blu-energies.com/news-and-media/news/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#31b1ba] hover:text-[#0b1b33] transition-colors"
            >
              <span>View All Releases</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Three Clean News Cards with Subtle Gradient Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news, idx) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => handleOpenNews(news)}
                onMouseEnter={() => soundFx.playHover()}
                className={`group relative p-6 sm:p-7 rounded-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 border ${
                  news.isMilestone
                    ? "bg-gradient-to-br from-white via-cyan-50/60 to-sky-50/40 border-cyan-300 shadow-md hover:shadow-xl hover:shadow-cyan-100/50 hover:border-[#31b1ba]"
                    : "bg-gradient-to-b from-white via-white to-slate-50/70 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#31b1ba]/60"
                }`}
              >
                <div>
                  {/* Date & Tag Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#0e7480] font-bold px-2 py-0.5 rounded-md bg-gradient-to-r from-[#31b1ba]/10 to-sky-500/10">
                      <Calendar className="w-3.5 h-3.5 text-[#31b1ba]" />
                      <span>{news.date}</span>
                    </div>

                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                        news.isMilestone
                          ? "bg-gradient-to-r from-[#31b1ba]/20 to-cyan-500/15 text-[#0e7480] border border-cyan-400/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {news.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-semibold text-[#0b1b33] group-hover:text-[#31b1ba] transition-colors duration-200 leading-snug mb-3">
                    {news.title}
                  </h4>

                  {/* Short Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                {/* Bottom Row: Read Release & Animated Gradient Arrow Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0b1b33] group-hover:text-[#31b1ba] transition-colors">
                  <span className="flex items-center gap-1.5">
                    {news.isMilestone && (
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    )}
                    <span>Read Release</span>
                  </span>

                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-[#31b1ba] group-hover:to-cyan-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODAL 1: PILLAR INTEL QUICK VIEW (Assets, Team, Investors)
         ========================================================================= */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                soundFx.playChime(440, 0.15);
                setSelectedPillar(null);
              }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl rounded-2xl bg-white text-[#0b1b33] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-200"
            >
              {/* Header Image Strip */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101e] via-[#04101e]/60 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => {
                    soundFx.playChime(440, 0.15);
                    setSelectedPillar(null);
                  }}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badge & Title in Header */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#31b1ba] text-white">
                    {selectedPillar.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                    {selectedPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-200 font-light">
                    {selectedPillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  {selectedPillar.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  {selectedPillar.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                      <div className="text-sm sm:text-base font-bold text-[#0b1b33]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Strategic Highlights */}
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-[#31b1ba] mb-3">
                    Core Operational Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPillar.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#31b1ba] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopyLink(selectedPillar.primaryLink)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs text-slate-700 transition-all cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedToast ? "Copied Link!" : "Share Link"}</span>
                  </button>

                  <a
                    href={selectedPillar.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playGlassPing()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#31b1ba] hover:bg-cyan-600 text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Open Official Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 2: FULL NEWS RELEASE READER
         ========================================================================= */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                soundFx.playChime(440, 0.15);
                setSelectedNews(null);
              }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 text-[#0b1b33] shadow-2xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  soundFx.playChime(440, 0.15);
                  setSelectedNews(null);
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Wire Meta */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#31b1ba] font-mono mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#31b1ba]/15 font-semibold uppercase">
                  {selectedNews.category} Release
                </span>
                <span>•</span>
                <span>{selectedNews.rawDate}</span>
                <span>•</span>
                <span>TSXV: BLU</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1b33] leading-snug mb-4">
                {selectedNews.title}
              </h3>

              {/* Full News Content */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-light leading-relaxed border-t border-slate-100 pt-4">
                {selectedNews.fullContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Regulatory Notice & Links */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 text-[11px] max-w-xs">
                  Official disclosure under TSX Venture Exchange policies. Neither TSXV nor its Regulation Services Provider accepts responsibility for adequacy.
                </span>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleCopyLink(selectedNews.externalUrl)}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-all cursor-pointer"
                    title="Copy Article Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <a
                    href={selectedNews.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playGlassPing()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#31b1ba] hover:bg-cyan-600 text-white font-medium shadow-sm transition-all cursor-pointer"
                  >
                    <span>View on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Copy Toast */}
      {copiedToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 py-2.5 px-5 rounded-full bg-[#31b1ba] text-white text-xs font-medium shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>Link copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
