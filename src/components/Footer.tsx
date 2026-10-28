"use client";

import React from "react";
import Link from "next/link";
import { soundFx } from "../utils/audio";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playGlassPing();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-20 w-full bg-[#020813] text-white border-t border-white/10 select-none overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        {/* Main Grid: Brand Column + 5 Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                BLU<span className="text-[#31b1ba]">ENERGIES</span>
              </span>
            </div>

            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              Building and advancing high-quality oil and gas opportunities in West Africa&apos;s deepwater basins, creating value for our stakeholders and contributing to a more secure energy future.
            </p>

            {/* Social Icons (in, X) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-cyan-400 bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all font-mono font-bold text-xs"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-cyan-400 bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all font-mono font-bold text-xs"
                title="X (Twitter)"
              >
                ✕
              </a>
            </div>
          </div>

          {/* Col 1: Corporate */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              Corporate
            </h4>
            <ul className="space-y-2 text-white/60 font-light">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  Our Strategy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/corporate/board-management/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Leadership Team
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/corporate/corporate-governance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Corporate Governance
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Assets & Operations */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              Assets & Operations
            </h4>
            <ul className="space-y-2 text-white/60 font-light">
              <li>
                <a
                  href="https://www.blu-energies.com/assets-and-operations/overview/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Our Assets
                </a>
              </li>
              <li>
                <a
                  href="#assets-operations"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Operational Overview
                </a>
              </li>
              <li>
                <a
                  href="#assets-operations"
                  className="hover:text-cyan-300 transition-colors"
                >
                  West Africa
                </a>
              </li>
              <li>
                <a
                  href="#assets-operations"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Technical Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Investors */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              Investors
            </h4>
            <ul className="space-y-2 text-white/60 font-light">
              <li>
                <a
                  href="#investors"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Investor Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/investors/financials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Financial Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/investors/stock-information/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Stock Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/investors/presentations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Presentations
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/investors/financials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Reports & Filings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: News & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              News & Media
            </h4>
            <ul className="space-y-2 text-white/60 font-light mb-6">
              <li>
                <a href="#news-media" className="hover:text-cyan-300 transition-colors">
                  News Releases
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/news-and-media/in-the-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Media Coverage
                </a>
              </li>
              <li>
                <a href="#news-media" className="hover:text-cyan-300 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/contact/request-for-information/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Media Inquiries
                </a>
              </li>
            </ul>

            <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-white/60 font-light">
              <li>
                <a
                  href="https://www.blu-energies.com/contact/contact-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
              <li>
                <a
                  href="https://www.blu-energies.com/contact/contact-details/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Office Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching mockup */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-[11px]">
          <div>
            © 2024 BluEnergies Ltd. All rights reserved. | TSXV: BLU
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Site Map
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
