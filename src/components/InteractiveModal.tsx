"use client";

import React from "react";
import { soundFx } from "../utils/audio";
import {
  X,
  TrendingUp,
  ShieldCheck,
  Compass,
  Layers,
  Flame,
  Globe,
  Radio,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface InteractiveModalProps {
  isOpen: boolean;
  section: "services" | "work" | "about" | "contact" | null;
  onClose: () => void;
  onOpenConsult: () => void;
}

export default function InteractiveModal({
  isOpen,
  section,
  onClose,
  onOpenConsult,
}: InteractiveModalProps) {
  if (!isOpen || !section) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#040d1a]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          soundFx.playChime(440, 0.15);
          onClose();
        }}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-white shadow-2xl border border-sky-500/30 bg-[#061426]/95">
        {/* Close button */}
        <button
          onClick={() => {
            soundFx.playChime(440, 0.15);
            onClose();
          }}
          onMouseEnter={() => soundFx.playHover()}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Section: Exploration Operations (Services) */}
        {section === "services" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Exploration Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2">
              Deepwater Frontier Exploration
            </h2>
            <p className="text-sm text-white/70 mb-6">
              Leveraging advanced 3D seismic imaging and cutting-edge drillship technology to derisk prolific offshore West African basin floor fan plays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium mb-1">3D Seismic Multi-Client Imaging</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  High-density Pre-Stack Time and Depth Migration (PSTM/PSDM) mapping deepwater Cretaceous fan complexes with sub-surface clarity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium mb-1">Basin Floor Fan Prospecting</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Targeting high-recovery turbidite sandstones with massive stratigraphic trapped hydrocarbon pay intervals along the margin.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium mb-1">Ultra-Deepwater Drilling</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Dual-derrick 7th-generation dynamic positioning drillships engineered for water depths between 1,500m and 3,000m.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium mb-1">ESG &amp; Marine Environmental Safety</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Zero-discharge drilling protocols, local community development, and strict adherence to international maritime regulations.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60">Review official operations overview:</span>
              <a
                href="https://www.blu-energies.com/assets-and-operations/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 flex items-center gap-1.5 transition-all"
              >
                <span>Explore Offshore Assets</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Section: Assets & Discoveries (Work) */}
        {section === "work" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Asset Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2">
              West African Margin Concessions
            </h2>
            <p className="text-sm text-white/70 mb-6">
              Strategically positioned blocks in one of the world's most active and prospective deepwater exploration frontiers.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">3,000m</div>
                <div className="text-[11px] text-white/60">Max Water Depth</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-0.5">3D PSDM</div>
                <div className="text-[11px] text-white/60">Seismic Acquired</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-0.5">TSXV: BLU</div>
                <div className="text-[11px] text-white/60">Public Trading</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Offshore Exploration License Portfolio</h4>
                  <p className="text-xs text-white/60">Targeting prolific basin floor fans along the transformative margin corridor.</p>
                </div>
                <span className="text-xs text-cyan-300 font-mono font-medium">Active</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">High Success Rate Basin Plays</h4>
                  <p className="text-xs text-white/60">Surrounded by premier global discoveries demonstrating multi-billion barrel potential.</p>
                </div>
                <span className="text-xs text-emerald-300 font-mono font-medium">Proven Margin</span>
              </div>
            </div>
          </div>
        )}

        {/* Section: About BluEnergies */}
        {section === "about" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Corporate Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2">
              BluEnergies Ltd.
            </h2>
            <p className="text-base text-white/90 mb-4 leading-relaxed font-light">
              BluEnergies Ltd. is a West Africa Deepwater Oil and Gas explorer. High success rates in basin floor fan plays have sparked an exploration boom along the West African Margin.
            </p>

            <div className="space-y-2.5 text-xs text-white/80 my-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Publicly traded exploration company on the TSX Venture Exchange under ticker <strong>TSXV: BLU</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Executive leadership with deep operational experience drilling major deepwater discoveries in Africa and the North Sea.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>State-of-the-art 3D seismic processing to pinpoint world-class basin floor turbidite reservoir traps.</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10 font-mono text-center">
              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="text-xs text-white/50">Ticker</div>
                <div className="text-sm font-semibold text-white">TSXV: BLU</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="text-xs text-white/50">Open</div>
                <div className="text-sm font-semibold text-white">2.14</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="text-xs text-white/50">High</div>
                <div className="text-sm font-semibold text-white">2.15</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5">
                <div className="text-xs text-white/50">Volume</div>
                <div className="text-sm font-semibold text-cyan-300">33,452</div>
              </div>
            </div>
          </div>
        )}

        {/* Section: Contact */}
        {section === "contact" && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Connection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light mb-2">
              Investor Relations &amp; Contact
            </h2>
            <p className="text-sm text-white/70 mb-6">
              Connect with BluEnergies corporate management and investor relations team.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                soundFx.playGlassPing();
                alert("Thank you! The BluEnergies IR desk will respond promptly.");
                onClose();
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="text-xs text-white/70 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm focus:border-cyan-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/70 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="investor@fund.com"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm focus:border-cyan-400 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/70 block mb-1">Inquiry Type</label>
                <select className="w-full px-3.5 py-2 rounded-xl bg-[#09152b] border border-white/15 text-sm focus:border-cyan-400 outline-none transition-colors text-white">
                  <option>Investor Relations &amp; Financials</option>
                  <option>Offshore Assets &amp; Operations</option>
                  <option>Media &amp; Press Inquiries</option>
                  <option>General Corporate</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/70 block mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Please send corporate presentation and Q3 financial updates..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-sm focus:border-cyan-400 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-900/40 cursor-pointer"
              >
                Submit Inquiry to BluEnergies IR
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
