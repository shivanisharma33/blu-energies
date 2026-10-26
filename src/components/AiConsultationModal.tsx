"use client";

import React, { useState } from "react";
import { soundFx } from "../utils/audio";
import confetti from "canvas-confetti";
import {
  X,
  Sparkles,
  Bot,
  ArrowRight,
  TrendingUp,
  Shield,
  Layers,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

interface AiConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}



export default function AiConsultationModal({
  isOpen,
  onClose,
}: AiConsultationModalProps) {
  const [step, setStep] = useState<"input" | "analyzing" | "result">("input");
  const [companyType, setCompanyType] = useState("SaaS / Tech Enterprise");
  const [revenue, setRevenue] = useState("$25M ARR");
  const [primaryGoal, setPrimaryGoal] = useState("Automate FX Risk & Cashflow");

  if (!isOpen) return null;

  const handleStartAnalysis = () => {
    soundFx.playChime(523, 0.3);
    setStep("analyzing");

    // Simulated multi-stage AI diagnostic
    setTimeout(() => {
      soundFx.playChime(659, 0.3);
    }, 1000);

    setTimeout(() => {
      soundFx.playGlassPing();
      setStep("result");
      // Fire confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#93c5fd", "#e8bf6a", "#ffffff", "#3b82f6"],
        });
      } catch {
        // Safe catch
      }
    }, 2200);
  };

  const handleReset = () => {
    setStep("input");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#09152b]/65 backdrop-blur-md"
        onClick={() => {
          soundFx.playChime(440, 0.15);
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-white/25 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playChime(440, 0.15);
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8bf6a] mb-2">
          <Bot className="w-4 h-4" />
          <span>Interactive AI Financial Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light mb-1">
          Autonomous Architecture Preview
        </h2>
        <p className="text-xs sm:text-sm text-white/70 mb-6">
          Configure institutional parameters to simulate an autonomous financial optimization pipeline.
        </p>

        {/* Step 1: Input Form */}
        {step === "input" && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Organizational Category
              </label>
              <select
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-white/50"
              >
                <option value="SaaS / Tech Enterprise" className="bg-[#112447]">
                  SaaS / Tech Enterprise
                </option>
                <option value="Global Logistics & Supply" className="bg-[#112447]">
                  Global Logistics & Supply
                </option>
                <option value="E-Commerce & Multi-Vendor" className="bg-[#112447]">
                  E-Commerce & Multi-Vendor
                </option>
                <option value="Healthcare & Life Sciences" className="bg-[#112447]">
                  Healthcare & Life Sciences
                </option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Operating Treasury
                </label>
                <select
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-white/50"
                >
                  <option value="$10M ARR" className="bg-[#112447]">$10M ARR</option>
                  <option value="$25M ARR" className="bg-[#112447]">$25M ARR</option>
                  <option value="$100M+ ARR" className="bg-[#112447]">$100M+ ARR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Priority Automation Objective
                </label>
                <select
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-white/50"
                >
                  <option value="Automate FX Risk & Cashflow" className="bg-[#112447]">
                    Automate FX & Cashflow
                  </option>
                  <option value="Zero-Latency Reconciliation" className="bg-[#112447]">
                    Zero-Latency Reconciliation
                  </option>
                  <option value="Multi-Entity Tax Optimization" className="bg-[#112447]">
                    Multi-Entity Tax Optimization
                  </option>
                </select>
              </div>
            </div>

            <button
              onClick={handleStartAnalysis}
              className="w-full mt-4 py-3 rounded-xl bg-white text-[#112447] font-semibold text-sm hover:bg-white/95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#e8bf6a]" />
              <span>Simulate Autonomous Optimization</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Analyzing State */}
        {step === "analyzing" && (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <Bot className="w-6 h-6 text-[#e8bf6a] animate-pulse" />
            </div>
            <h3 className="text-lg font-medium mb-1">Synthesizing Neural Topology</h3>
            <p className="text-xs text-white/70 max-w-sm">
              Analyzing historical volatility spreads, cross-border accounts, and reconciliation latency for {companyType}...
            </p>
          </div>
        )}

        {/* Step 3: Simulation Results */}
        {step === "result" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/10 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Simulation Verified
                </span>
                <span className="text-xs font-mono text-white/60">Profile: {revenue}</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center mb-3">
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-base sm:text-lg font-bold text-white">+$410,000</div>
                  <div className="text-[10px] text-white/60">Annual Yield Alpha</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-base sm:text-lg font-bold text-emerald-300">91%</div>
                  <div className="text-[10px] text-white/60">Less Manual Effort</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-base sm:text-lg font-bold text-[#e8bf6a]">&lt; 200ms</div>
                  <div className="text-[10px] text-white/60">Ledger Finality</div>
                </div>
              </div>

              <p className="text-xs text-white/80 leading-relaxed">
                By routing cashflows through our autonomous agent network, your organization eliminates 340+ hours of manual reconciliation monthly while auto-hedging currency exposure across major corridors.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Rerun Simulation</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playGlassPing();
                  alert("Priority access request confirmed! An integration engineer will contact you.");
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl bg-white text-[#112447] text-xs font-semibold hover:bg-white/95 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Deploy Autonomous Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
