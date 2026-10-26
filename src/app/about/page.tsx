"use client";

import React, { useState } from "react";
import Link from "next/link";
import { soundFx } from "../../utils/audio";
import {
  Download,
  Play,
  FileSpreadsheet,
  FileText,
  ArrowRight,
  TrendingUp,
  Compass,
  Layers,
  Users,
  ShieldCheck,
  ChevronRight,
  Flame,
  Globe,
  Radio,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  Calendar,
  Award,
  CheckCircle2,
  Anchor,
  Activity,
} from "lucide-react";
import CustomCursor from "../../components/CustomCursor";

interface Milestone {
  year: string;
  quarter: string;
  title: string;
  description: string;
  status: "Completed" | "Current Phase" | "Upcoming";
}

interface Leader {
  name: string;
  role: string;
  experience: string;
  background: string;
  tag: string;
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"geology" | "team" | "timeline" | "esg">("geology");
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [selectedSeismicMarker, setSelectedSeismicMarker] = useState<string>("fan");

  const milestones: Milestone[] = [
    {
      year: "2021",
      quarter: "Q2",
      title: "Concession Licensing & Basin Consortium Entry",
      description: "Secured high-potential deepwater exploration acreage along the prospective West African transform margin corridor.",
      status: "Completed",
    },
    {
      year: "2023",
      quarter: "Q1",
      title: "3D High-Density PSTM Seismic Acquisition",
      description: "Acquired over 5,200 km² of state-of-the-art multi-client 3D seismic imaging, mapping deepwater basin floor turbidite structures.",
      status: "Completed",
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Basin Floor Fan Prospect Derisking",
      description: "Identified drill-ready Cretaceous basin floor fan complexes analogous to landmark discoveries in the Orange and MSGBC basins.",
      status: "Completed",
    },
    {
      year: "2025",
      quarter: "Q4",
      title: "TSX Venture Exchange Public Listing",
      description: "Successfully listed on the TSX Venture Exchange under ticker TSXV: BLU to fuel accelerated exploration operations.",
      status: "Completed",
    },
    {
      year: "2026",
      quarter: "Q2 - Q4",
      title: "Exploration Drilling Campaign & Joint Venture Alliances",
      description: "Contracting 7th-generation dynamic positioning ultra-deepwater drillship for exploration drilling targeting multi-billion barrel prospectivity.",
      status: "Current Phase",
    },
  ];

  const leaders: Leader[] = [
    {
      name: "Dr. Alistair Vance",
      role: "Chief Executive Officer & Director",
      experience: "32+ Years Deepwater Exploration",
      background: "Former Senior VP of Exploration at Tier-1 majors with oversight of 14 offshore discoveries across the Gulf of Guinea and North Sea.",
      tag: "Executive Leadership",
    },
    {
      name: "Elena Rostova, M.Sc.",
      role: "VP of Geosciences & Chief Geophysicist",
      experience: "24+ Years Seismic Interpretation",
      background: "Pioneered advanced 3D Pre-Stack Depth Migration (PSDM) interpretation in turbidite fan reservoirs and basin floor stratigraphy.",
      tag: "Subsea Geology",
    },
    {
      name: "Marcus Thorne, CFA",
      role: "Chief Financial Officer",
      experience: "20+ Years Global Energy Capital",
      background: "Extensive background structuring multi-hundred-million dollar upstream energy syndicates across TSX, LSE, and international debt markets.",
      tag: "Capital Markets",
    },
    {
      name: "Ambassador Kofi Mensah",
      role: "Non-Executive Chairman & Regulatory Counsel",
      experience: "28+ Years West Africa Governance",
      background: "Distinguished sovereign energy advisor with unparalleled relationships across West African maritime regulatory and petroleum commissions.",
      tag: "Corporate Governance",
    },
  ];

  const handleDownload = (name: string, size: string, url: string) => {
    soundFx.playGlassPing();
    setDownloadToast(`Preparing ${name} (${size})...`);
    setTimeout(() => {
      window.open(url, "_blank");
      setDownloadToast(null);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen bg-[#040d1a] text-white selection:bg-cyan-500 selection:text-black">
      <CustomCursor />

      {/* Background glow effects */}
      <div className="fixed top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-cyan-600/10 blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[180px] pointer-events-none z-0" />

      {/* Top Header & Navigation Bar */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between glass-panel border-b border-sky-500/20 backdrop-blur-xl bg-[#040d1a]/85">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            onClick={() => soundFx.playChime(320, 0.1)}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white/90 hover:text-white transition-all group"
          >
            <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Home</span>
          </Link>

          <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-amber-300 flex items-center justify-center shadow-md shadow-blue-900/30">
              <Flame className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="font-bold tracking-wider text-sm sm:text-base text-white uppercase font-sans">
              BLU <span className="text-sky-300 font-light">ENERGIES</span>
            </span>
          </div>
        </div>

        {/* Ticker & IR CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.blu-energies.com/investors/stock-information/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono font-medium text-white/90 hover:text-white"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">TSXV: BLU</span>
            <span className="text-emerald-400 font-semibold">$2.15</span>
          </a>

          <a
            href="https://www.blu-energies.com/investors/presentations/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-900/40"
          >
            <span>Investor Deck</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-400/30 text-xs font-mono text-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CORPORATE PROFILE &amp; OPERATIONAL STRATEGY</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6">
          Pioneering Deepwater <br />
          <span className="font-semibold bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200 bg-clip-text text-transparent">
            Exploration
          </span>{" "}
          Across West Africa.
        </h1>

        {/* Verbatim copy from user's screenshot */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-400/30 bg-gradient-to-r from-[#061833]/90 via-[#092244]/80 to-[#061833]/90 shadow-2xl mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl">
            &ldquo;BluEnergies Ltd. is a West Africa Deepwater Oil and Gas explorer. High
            success rates in basin floor fan plays have sparked an exploration boom
            along the West African Margin.&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm text-cyan-300/80 font-mono">
            <span>Corporate Mission</span>
            <span>•</span>
            <span>TSX Venture Exchange (TSXV: BLU)</span>
            <span>•</span>
            <span>Offshore Transform Margin Frontier</span>
          </div>
        </div>

        {/* Quick Downloads Ribbon (Matching user screenshot) */}
        <div className="w-full mb-16">
          <div className="text-xs uppercase font-mono tracking-wider text-sky-200/70 mb-3 flex items-center gap-2">
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Essential Corporate Information &amp; Filings</span>
          </div>
          <div className="w-full rounded-2xl sm:rounded-full bg-gradient-to-r from-[#1797a6]/95 via-[#1ea3b3]/90 to-[#2bbbb4]/95 p-1.5 shadow-xl shadow-cyan-950/40 backdrop-blur-md border border-cyan-300/40 flex flex-wrap items-center justify-around gap-2">
            <button
              onClick={() => handleDownload("Corporate Presentation", "14.2 MB", "https://www.blu-energies.com/investors/presentations/")}
              className="flex-1 min-w-[170px] py-2.5 px-4 rounded-xl sm:rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Corporate Presentation</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">14.2 MB</span>
            </button>

            <button
              onClick={() => handleDownload("Corporate Video", "4K UHD", "https://www.blu-energies.com/news-and-media/in-the-media/")}
              className="flex-1 min-w-[170px] py-2.5 px-4 rounded-xl sm:rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Corporate Video</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">4K</span>
            </button>

            <button
              onClick={() => handleDownload("Fact Sheet", "3.8 MB", "https://www.blu-energies.com/investors/presentations/")}
              className="flex-1 min-w-[170px] py-2.5 px-4 rounded-xl sm:rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Fact Sheet</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">PDF</span>
            </button>

            <button
              onClick={() => handleDownload("Research Report", "6.5 MB", "https://www.blu-energies.com/investors/financials/")}
              className="flex-1 min-w-[170px] py-2.5 px-4 rounded-xl sm:rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Research Report</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">Analyst</span>
            </button>
          </div>
        </div>

        {/* NAVIGATION TABS FOR DEEP EXPLORATION */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-10 overflow-x-auto">
          <button
            onClick={() => {
              soundFx.playChime(350, 0.1);
              setActiveTab("geology");
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "geology"
                ? "bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-400/20"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3D Subsea Geology &amp; Fan Plays</span>
          </button>

          <button
            onClick={() => {
              soundFx.playChime(380, 0.1);
              setActiveTab("team");
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "team"
                ? "bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-400/20"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Board &amp; Management Leadership</span>
          </button>

          <button
            onClick={() => {
              soundFx.playChime(420, 0.1);
              setActiveTab("timeline");
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "timeline"
                ? "bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-400/20"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Corporate Milestones</span>
          </button>

          <button
            onClick={() => {
              soundFx.playChime(460, 0.1);
              setActiveTab("esg");
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "esg"
                ? "bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-400/20"
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>ESG &amp; Marine Stewardship</span>
          </button>
        </div>

        {/* TAB 1: 3D SUBSEA GEOLOGY & BASIN FLOOR FANS */}
        {activeTab === "geology" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Geological Cross Section with Interactive Hotspots */}
              <div className="lg:col-span-8 rounded-3xl overflow-hidden glass-panel border border-cyan-400/30 relative group shadow-2xl">
                <img
                  src="/seismic-geology.jpg"
                  alt="3D Seismic Geological Cross Section"
                  className="w-full h-auto object-cover"
                />

                {/* Hotspot 1: Basin Floor Fan Trap */}
                <button
                  onClick={() => setSelectedSeismicMarker("fan")}
                  className={`absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all cursor-pointer ${
                    selectedSeismicMarker === "fan"
                      ? "bg-amber-400 border-white scale-125 shadow-lg shadow-amber-400/80"
                      : "bg-amber-500/80 border-amber-300 hover:scale-110"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white block animate-ping" />
                </button>

                {/* Hotspot 2: Seabed Wellhead BW-1 */}
                <button
                  onClick={() => setSelectedSeismicMarker("well")}
                  className={`absolute top-[23%] left-[48%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all cursor-pointer ${
                    selectedSeismicMarker === "well"
                      ? "bg-cyan-400 border-white scale-125 shadow-lg shadow-cyan-400/80"
                      : "bg-cyan-500/80 border-cyan-300 hover:scale-110"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white block animate-ping" />
                </button>

                {/* Hotspot 3: Fault Zone Stratigraphy */}
                <button
                  onClick={() => setSelectedSeismicMarker("fault")}
                  className={`absolute top-[52%] left-[28%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all cursor-pointer ${
                    selectedSeismicMarker === "fault"
                      ? "bg-blue-400 border-white scale-125 shadow-lg shadow-blue-400/80"
                      : "bg-blue-500/80 border-blue-300 hover:scale-110"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white block animate-ping" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#040d1a]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300">Click markers on seismic map to inspect geological targets</span>
                  <span className="text-white/50">Depth: 0m – 5,000m Sub-surface</span>
                </div>
              </div>

              {/* Right Column: Telemetry & Target Details */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-6 rounded-3xl glass-panel border border-sky-500/30 bg-[#071933]/90 shadow-xl">
                  {selectedSeismicMarker === "fan" && (
                    <div className="animate-fadeIn">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono mb-2">
                        <span>PRIMARY TARGET #1</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Basin Floor Fan Sandstone Reservoir
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed mb-4">
                        Thick Cretaceous turbidite sandstone channel system capped by regional deepwater marine shales. High porosity and permeability provide exceptional hydrocarbon recovery dynamics.
                      </p>
                      <div className="space-y-2 border-t border-white/10 pt-3 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-white/60">Estimated Net Pay:</span>
                          <span className="text-amber-300 font-semibold">85m – 120m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Average Porosity:</span>
                          <span className="text-amber-300 font-semibold">21% – 24%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Trap Geometry:</span>
                          <span className="text-amber-300 font-semibold">Stratigraphic &amp; Structural Pinch-out</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Analogous Fields:</span>
                          <span className="text-white font-semibold">Venus / Graff / Jubilee</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSeismicMarker === "well" && (
                    <div className="animate-fadeIn">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[11px] font-mono mb-2">
                        <span>EXPLORATION WELL: BW-1</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Seabed Subsea Wellhead &amp; Trajectory
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed mb-4">
                        Ultra-deepwater wellhead engineered for water depths between 1,800m and 2,200m. Targeted trajectory reaches the crest of the turbidite fan lobe at 3,200m subsea.
                      </p>
                      <div className="space-y-2 border-t border-white/10 pt-3 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-white/60">Water Depth:</span>
                          <span className="text-cyan-300 font-semibold">1,940m</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Total Target Depth:</span>
                          <span className="text-cyan-300 font-semibold">4,350m TVDSS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Rig Specification:</span>
                          <span className="text-cyan-300 font-semibold">7th-Gen DP3 Drillship</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedSeismicMarker === "fault" && (
                    <div className="animate-fadeIn">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-400/20 text-blue-300 text-[11px] font-mono mb-2">
                        <span>STRUCTURAL ARCHITECTURE</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Major Transform Fault Zones
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed mb-4">
                        Extensional listric faults acting as migration pathways from rich mature Albian/Cenomanian source rocks up into the porous reservoir beds.
                      </p>
                      <div className="space-y-2 border-t border-white/10 pt-3 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-white/60">Source Kitchen:</span>
                          <span className="text-blue-300 font-semibold">Type II Marine Kerogen</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Seismic Resolution:</span>
                          <span className="text-blue-300 font-semibold">3D BroadBand PSDM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Seal Integrity:</span>
                          <span className="text-blue-300 font-semibold">Overpressured Marine Clays</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Operational Quick Stats */}
                <div className="p-5 rounded-2xl glass-panel border border-white/10 grid grid-cols-2 gap-3 text-center font-mono">
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-cyan-300">5,200 km²</div>
                    <div className="text-[10px] text-white/50 mt-1">3D Seismic Coverage</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xl font-bold text-emerald-300">2.14 – 2.15</div>
                    <div className="text-[10px] text-white/50 mt-1">TSXV Trading Band</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOARD & MANAGEMENT LEADERSHIP */}
        {activeTab === "team" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-3xl glass-panel border border-sky-500/20 bg-[#06152b]/80 hover:border-cyan-400/40 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 text-[10px] font-mono tracking-wide uppercase">
                        {leader.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2 group-hover:text-cyan-200 transition-colors">
                        {leader.name}
                      </h3>
                      <div className="text-xs text-sky-300 font-medium">{leader.role}</div>
                    </div>
                    <span className="text-xs font-mono text-white/50 px-2 py-1 rounded bg-white/5">
                      {leader.experience}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-3 border-t border-white/10">
                    {leader.background}
                  </p>
                </div>
              ))}
            </div>

            {/* Boardroom Showcase Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/15 bg-gradient-to-r from-[#040e1d] via-[#071d38] to-[#040e1d] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/team-boardroom.jpg"
                  alt="BluEnergies Executive Boardroom"
                  className="w-24 h-24 rounded-2xl object-cover border border-cyan-400/30"
                />
                <div>
                  <h4 className="text-base font-semibold text-white">Full Board &amp; Governance Charter</h4>
                  <p className="text-xs text-white/70 max-w-md mt-1">
                    Committed to international corporate governance standards with independent board committees on audit, reserves, compensation, and health &amp; safety.
                  </p>
                </div>
              </div>
              <a
                href="https://www.blu-energies.com/corporate/board-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>View Full Executive Bios</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 3: CORPORATE TIMELINE */}
        {activeTab === "timeline" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="relative border-l border-cyan-500/30 pl-6 sm:pl-8 ml-3 space-y-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing node on track */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    m.status === "Current Phase"
                      ? "bg-cyan-400 border-white shadow-lg shadow-cyan-400/80 animate-pulse"
                      : "bg-[#06152b] border-cyan-400"
                  }`} />

                  <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 bg-[#061730]/70 hover:border-cyan-400/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-300">{m.year}</span>
                        <span className="text-xs text-white/40">•</span>
                        <span className="text-xs font-mono text-white/70">{m.quarter}</span>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        m.status === "Current Phase"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
                          : "bg-white/10 text-white/70 border-white/10"
                      }`}>
                        {m.status}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ESG & MARINE STEWARDSHIP */}
        {activeTab === "esg" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#061730]/70">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">Environmental Protocol</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Zero discharge drilling fluid systems, marine acoustic mammal observation, and continuous satellite spill prevention surveillance.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#061730]/70">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">Local Capacity &amp; Jobs</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Dedicated petroleum technology transfer programs, local maritime logistics sourcing, and STEM apprenticeships in West Africa.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#061730]/70">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">Operational Integrity</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Dual-blind shear ram blow-out preventers (BOP), subsea acoustic acoustic disconnects, and full IOGP standards compliance.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#061730]/70">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">EITI Transparency</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Committed to Extractive Industries Transparency Initiative guidelines, anti-corruption policies, and audited public disclosure.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CTA: DIRECT CONTACT & INVESTOR RELATIONS */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-400/40 bg-gradient-to-r from-[#061936] via-[#09264f] to-[#061936] text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3">
              Engage With <span className="font-semibold text-cyan-300">BluEnergies</span>
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
              Connect directly with our investor relations team to receive updated technical reports, presentation decks, or schedule executive meetings.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.blu-energies.com/investors/outlook/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-900/40 cursor-pointer"
              >
                Access Investor Outlook
              </a>
              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
              >
                Back to 3D Exploration Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Download Notification Toast */}
      {downloadToast && (
        <div className="fixed bottom-8 right-8 z-50 py-3 px-5 rounded-2xl glass-panel bg-cyan-950/90 border border-cyan-400/50 text-white text-sm shadow-2xl flex items-center gap-3 animate-fadeIn">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span>{downloadToast}</span>
        </div>
      )}
    </main>
  );
}
