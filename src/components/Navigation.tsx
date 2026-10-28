"use client";

import React, { useState, useRef, useEffect } from "react";
import { soundFx } from "../utils/audio";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  ExternalLink,
  Flame,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface NavCategory {
  id: string;
  label: string;
  subLinks: SubLink[];
}

interface NavigationProps {
  onOpenModal?: (section: "services" | "work" | "about" | "contact" | "consult") => void;
  activeSection?: string | null;
}

export default function Navigation({
  onOpenModal,
  activeSection,
}: NavigationProps = {}) {
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const navCategories: NavCategory[] = [
    {
      id: "corporate",
      label: "Corporate",
      subLinks: [
        { label: "About Us (Dedicated Page)", href: "/about" },
        { label: "About Overview (Section)", href: "/#about" },
        { label: "Board & Management", href: "https://www.blu-energies.com/corporate/board-management/" },
        { label: "Corporate Governance", href: "https://www.blu-energies.com/corporate/corporate-governance/" },
      ],
    },
    {
      id: "assets",
      label: "Assets & Operations",
      subLinks: [
        { label: "Explore Assets (Portal)", href: "/#explore" },
        { label: "Overview", href: "https://www.blu-energies.com/assets-and-operations/overview/" },
      ],
    },
    {
      id: "investors",
      label: "Investors",
      subLinks: [
        { label: "Investor Hub (Portal)", href: "/#explore" },
        { label: "Outlook", href: "https://www.blu-energies.com/investors/outlook/" },
        { label: "Stock Information", href: "https://www.blu-energies.com/investors/stock-information/" },
        { label: "Financials", href: "https://www.blu-energies.com/investors/financials/" },
        { label: "Presentations", href: "https://www.blu-energies.com/investors/presentations/" },
        { label: "AGM", href: "https://www.blu-energies.com/investors/agm/" },
      ],
    },
    {
      id: "news",
      label: "News & Media",
      subLinks: [
        { label: "Regulatory Newsroom (Portal)", href: "/#explore" },
        { label: "News", href: "https://www.blu-energies.com/news-and-media/news/" },
        { label: "In the Media", href: "https://www.blu-energies.com/news-and-media/in-the-media/" },
      ],
    },
    {
      id: "contact",
      label: "Contact",
      subLinks: [
        { label: "Contact Details", href: "https://www.blu-energies.com/contact/contact-details/" },
        { label: "Request for Information", href: "https://www.blu-energies.com/contact/request-for-information/" },
      ],
    },
  ];

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
    soundFx.playHover();
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header className="relative z-30 w-full px-4 sm:px-8 md:px-12 lg:px-14 pt-5 pb-3 flex items-center justify-between select-none">
      {/* Brand / Logo */}
      <a
        href="https://www.blu-energies.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 cursor-pointer group"
        onMouseEnter={() => soundFx.playHover()}
      >
        <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-amber-300 flex items-center justify-center shadow-md shadow-blue-900/30 group-hover:scale-105 transition-transform">
          <Flame className="w-4 h-4 text-white" />
        </span>
        <div className="flex flex-col">
          <span className="tracking-wider text-white font-bold text-base sm:text-lg leading-tight uppercase font-sans">
            BLU <span className="text-sky-300 font-light">ENERGIES</span>
          </span>
          <span className="text-[9px] uppercase tracking-widest text-sky-200/80 font-mono">
            West Africa Offshore
          </span>
        </div>
      </a>

      {/* Desktop Floating Navigation with Glass Dropdowns */}
      <nav className="hidden lg:flex items-center glass-pill px-3 py-1.5 rounded-full">
        {navCategories.map((cat) => {
          const isOpen = activeDropdown === cat.id;
          return (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(cat.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-normal rounded-full flex items-center gap-1.5 transition-all duration-200 ${
                  isOpen
                    ? "bg-white/25 text-white font-medium"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <ChevronDown
                  className={`w-3 h-3 text-white/70 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {/* Glassmorphic Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[220px] rounded-2xl glass-panel p-2 shadow-2xl border border-white/25 backdrop-blur-xl animate-fadeIn z-50">
                  <div className="py-1 flex flex-col gap-0.5">
                    {cat.subLinks.map((sub) => {
                      const isInternal = sub.href.startsWith("#") || sub.href.startsWith("/");
                      return (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={isInternal ? undefined : "_blank"}
                          rel={isInternal ? undefined : "noopener noreferrer"}
                          className="px-3.5 py-2 rounded-xl text-xs font-normal text-white/90 hover:text-white hover:bg-white/20 flex items-center justify-between transition-colors group"
                          onMouseEnter={() => soundFx.playHover()}
                          onClick={() => {
                            if (isInternal) {
                              setActiveDropdown(null);
                            }
                          }}
                        >
                          <span>{sub.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-80 transition-opacity text-sky-200" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Right Controls: TSXV Ticker, Sound & Contact CTA */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* TSXV BLU Stock Ticker Badge */}
        <a
          href="https://www.blu-energies.com/investors/stock-information/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => soundFx.playHover()}
          className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono font-medium text-white/95 hover:text-white transition-all shadow-sm hover:scale-[1.02]"
          title="TSXV: BLU Stock Information"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide">TSXV: BLU</span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
        </a>

        {/* Audio Toggle */}
        <button
          onClick={handleToggleSound}
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
          onMouseEnter={() => soundFx.playHover()}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#e8bf6a]" />
          )}
        </button>

        {/* Contact Details CTA Pill */}
        <a
          href="https://www.blu-energies.com/contact/contact-details/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => soundFx.playHover()}
          className="hidden sm:flex glass-pill pl-4 pr-1.5 py-1.5 rounded-full items-center gap-2 text-xs font-medium text-white hover:text-white group transition-all"
        >
          <span>Contact</span>
          <span className="w-5 h-5 rounded-full bg-white text-[#112447] flex items-center justify-center text-[11px] group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-3 h-3" />
          </span>
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-8 h-8 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 rounded-2xl glass-panel p-5 max-h-[75vh] overflow-y-auto border border-white/25 shadow-2xl backdrop-blur-2xl z-50 animate-fadeIn">
          <div className="space-y-4">
            {navCategories.map((cat) => (
              <div key={cat.id} className="border-b border-white/10 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e8bf6a] block mb-2">
                  {cat.label}
                </span>
                <div className="flex flex-col gap-1.5 pl-2">
                  {cat.subLinks.map((sub) => {
                    const isInternal = sub.href.startsWith("#") || sub.href.startsWith("/");
                    return (
                      <a
                        key={sub.label}
                        href={sub.href}
                        target={isInternal ? undefined : "_blank"}
                        rel={isInternal ? undefined : "noopener noreferrer"}
                        className="text-sm text-white/85 hover:text-white py-1 flex items-center justify-between"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{sub.label}</span>
                        <ExternalLink className="w-3 h-3 text-white/50" />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
