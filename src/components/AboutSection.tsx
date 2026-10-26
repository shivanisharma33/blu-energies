"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from "framer-motion";
import { soundFx } from "../utils/audio";
import {
  Download,
  Play,
  FileSpreadsheet,
  FileText,
  ArrowRight,
} from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform layers for different depths
  const yTitle = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const yText = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const yStats = useTransform(scrollYProgress, [0, 1], [110, -50]);
  const yExplore = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yDownloads = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  // Mouse Parallax for subtle interactive micro-motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 24);
    mouseY.set(y * 24);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const downloadItems: DownloadItem[] = [
    {
      id: "pres",
      title: "Corporate Presentation",
      url: "https://www.blu-energies.com/investors/presentations/",
      icon: <Download className="w-3.5 h-3.5" />,
    },
    {
      id: "video",
      title: "Corporate Video",
      url: "https://www.blu-energies.com/news-and-media/in-the-media/",
      icon: <Play className="w-3.5 h-3.5 fill-current" />,
    },
    {
      id: "factsheet",
      title: "Fact Sheet",
      url: "https://www.blu-energies.com/investors/presentations/",
      icon: <FileSpreadsheet className="w-3.5 h-3.5" />,
    },
    {
      id: "research",
      title: "Research Report",
      url: "https://www.blu-energies.com/investors/financials/",
      icon: <FileText className="w-3.5 h-3.5" />,
    },
  ];

  const handleDownloadClick = (item: DownloadItem, e: React.MouseEvent) => {
    e.preventDefault();
    soundFx.playGlassPing();
    setDownloadToast(`Opening ${item.title}...`);
    setTimeout(() => {
      window.open(item.url, "_blank");
      setDownloadToast(null);
    }, 400);
  };

  // Reveal animation variant presets
  const revealContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const revealItem: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-20 w-full min-h-[90vh] py-20 px-4 sm:px-8 md:px-14 lg:px-20 flex flex-col justify-start bg-gradient-to-b from-[#040d1a] via-[#051326] to-[#040d1a] border-t border-sky-900/30 text-white select-none overflow-hidden"
    >
      {/* 1. TOP DOWNLOADS BAR (Exact clean teal banner from screenshot with subtle parallax) */}
      <motion.div
        style={{ y: yDownloads }}
        className="w-full mb-16 sm:mb-24 relative z-30"
      >
        <div className="w-full rounded-xl sm:rounded-2xl bg-[#31b1ba] shadow-xl shadow-teal-950/25 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-white">
          {downloadItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleDownloadClick(item, e)}
              onMouseEnter={() => soundFx.playHover()}
              className="flex-1 min-w-[170px] py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/95 hover:text-white hover:bg-white/15 transition-all duration-200 active:scale-98 cursor-pointer group"
            >
              <span className="text-white/90 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="tracking-wide">{item.title}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* 2. PURE TEXT CONTENT ROW (Enlarged Text, Parallax Transforms, and Reveal Animations) */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16">
        
        {/* Left Side: Vertical Explore Indicator with Parallax */}
        <motion.div
          style={{ y: yExplore }}
          className="hidden lg:flex lg:col-span-1 flex-col items-center justify-start pt-4"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[13px] tracking-[0.25em] text-white/70 font-sans rotate-180 [writing-mode:vertical-rl] select-none">
              Explore
            </span>
            <div className="w-[1.5px] h-28 bg-white/25" />
          </div>
        </motion.div>

        {/* Center: Large Headline & Enlarged Narrative Text with Reveal Animation */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Animated Heading with Reveal Mask & Parallax */}
          <motion.div
            style={{ y: yTitle, x: springX }}
            className="overflow-hidden mb-6 sm:mb-8"
          >
            <motion.h2
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none"
            >
              About Us
            </motion.h2>
          </motion.div>

          {/* Staggered Reveal Mask for Enlarged Narrative Text */}
          <motion.div
            style={{ y: yText }}
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-4 max-w-3xl mb-10 sm:mb-12"
          >
            {/* Sentence 1 (Enlarged) */}
            <div className="overflow-hidden">
              <motion.p
                variants={revealItem}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light text-white/95 leading-[1.25] tracking-tight"
              >
                BluEnergies Ltd. is a{" "}
                <span className="text-white font-normal">
                  West Africa Deepwater Oil and Gas
                </span>{" "}
                explorer.
              </motion.p>
            </div>

            {/* Sentence 2 (Enlarged) */}
            <div className="overflow-hidden">
              <motion.p
                variants={revealItem}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-light text-sky-100/90 leading-[1.25] tracking-tight"
              >
                High success rates in{" "}
                <span className="text-[#31b1ba] font-normal">
                  basin floor fan plays
                </span>{" "}
                have sparked an exploration boom along the{" "}
                <span className="text-white font-normal">
                  West African Margin.
                </span>
              </motion.p>
            </div>
          </motion.div>

          {/* Clean Arrow Link with Reveal & Hover Spring */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "120%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <Link
                href="/about"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playGlassPing()}
                className="group inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/5 hover:bg-white/20 hover:border-white text-white transition-all duration-300 shadow-lg cursor-pointer"
                title="Learn more about BluEnergies"
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: Enlarged TSXV BLU Ticker Stats with Parallax & Reveal Animation */}
        <motion.div
          style={{ y: yStats }}
          className="lg:col-span-4 w-full flex lg:justify-end pt-4"
        >
          <div className="w-full max-w-md">
            
            {/* Header Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h3
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white font-sans"
              >
                TSXV BLU
              </motion.h3>
            </div>

            {/* Metrics Grid with vertical cyan dividing borders matching screenshot */}
            <motion.div
              variants={revealContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="grid grid-cols-2 gap-x-10 font-sans"
            >
              {/* Column 1 with vertical left cyan line */}
              <div className="border-l-[3px] border-[#31b1ba] pl-5 py-1 space-y-4">
                <div className="overflow-hidden">
                  <motion.div variants={revealItem} className="flex items-center justify-between text-lg sm:text-xl">
                    <span className="text-white/70">Open</span>
                    <span className="font-semibold text-white">2.14</span>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={revealItem} className="flex items-center justify-between text-lg sm:text-xl">
                    <span className="text-white/70">Vol</span>
                    <span className="font-semibold text-white">33452</span>
                  </motion.div>
                </div>
              </div>

              {/* Column 2 with vertical left cyan line */}
              <div className="border-l-[3px] border-[#31b1ba] pl-5 py-1 space-y-4">
                <div className="overflow-hidden">
                  <motion.div variants={revealItem} className="flex items-center justify-between text-lg sm:text-xl">
                    <span className="text-white/70">High</span>
                    <span className="font-semibold text-white">2.15</span>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={revealItem} className="flex items-center justify-between text-lg sm:text-xl">
                    <span className="text-white/70">Low</span>
                    <span className="font-semibold text-white">2.08</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Toast Feedback */}
      {downloadToast && (
        <div className="fixed bottom-8 right-8 z-50 py-2.5 px-4 rounded-xl glass-panel bg-[#040e1d]/90 border border-white/20 text-white text-xs shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#31b1ba] animate-ping" />
          <span>{downloadToast}</span>
        </div>
      )}
    </section>
  );
}
