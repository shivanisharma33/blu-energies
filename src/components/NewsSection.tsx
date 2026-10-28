"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "../utils/audio";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Share2,
  X,
} from "lucide-react";

interface NewsItem {
  id: string;
  date: string;
  badge: string;
  title: string;
  summary: string;
  image: string;
  link: string;
  linkLabel: string;
}

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const featuredNews: NewsItem = {
    id: "featured",
    date: "OCT 04, 2024",
    badge: "NEWS RELEASE",
    title:
      "BluEnergies Announces Strategic Update on West Africa Exploration Activities",
    summary:
      "BluEnergies Ltd. is pleased to provide an update on its West Africa exploration program and upcoming milestones.",
    image: "/assets-operations.jpg",
    link: "https://www.blu-energies.com/news-and-media/news/",
    linkLabel: "Read Release",
  };

  const sideNews: NewsItem[] = [
    {
      id: "side-1",
      date: "SEP 18, 2024",
      badge: "CORPORATE UPDATE",
      title: "BluEnergies Provides Operational Update",
      summary:
        "Comprehensive operational review detailing 3D seismic processing milestones and farm-in market discussions.",
      image: "/engineers-offshore.jpg",
      link: "https://www.blu-energies.com/news-and-media/news/",
      linkLabel: "Read More",
    },
    {
      id: "side-2",
      date: "AUG 12, 2024",
      badge: "FINANCIAL",
      title: "BluEnergies Reports Second Quarter 2024 Results",
      summary:
        "Financial results highlighting strong balance sheet flexibility and continued disciplined capital allocation.",
      image: "/offshore-vessel.jpg",
      link: "https://www.blu-energies.com/news-and-media/news/",
      linkLabel: "Read Release",
    },
  ];

  return (
    <section
      id="news-media"
      className="relative z-20 w-full py-20 lg:py-28 px-6 sm:px-10 md:px-14 lg:px-20 bg-[#040e1d] text-white select-none overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="mb-2">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#31b1ba]">
                NEWS & MEDIA
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Latest Updates
            </h2>
          </div>

          {/* Right Controls: View All News & Slider Arrows */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.blu-energies.com/news-and-media/news/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#31b1ba] transition-colors"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Slider Navigation Buttons (matching mockup) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => soundFx.playHover()}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => soundFx.playHover()}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column News Grid (Featured Card on Left + 2 Stacked Cards on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Card (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => {
              soundFx.playGlassPing();
              setSelectedArticle(featuredNews);
            }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 hover:border-cyan-400/50 shadow-2xl relative min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 cursor-pointer group bg-[#061426]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020a14] via-[#020a14]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#020a14]/40 via-transparent to-[#020a14]/90" />
            </div>

            {/* Featured Content */}
            <div className="relative z-10 max-w-xl">
              {/* Meta: Date & Badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-medium text-white/70">
                  {featuredNews.date}
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  {featuredNews.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-cyan-200 transition-colors">
                {featuredNews.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-white/75 font-light leading-relaxed mb-6">
                {featuredNews.summary}
              </p>

              {/* Link: Read Release -> */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-white transition-colors">
                <span>{featuredNews.linkLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Right Side Stacked Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {sideNews.map((news, i) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onClick={() => {
                  soundFx.playGlassPing();
                  setSelectedArticle(news);
                }}
                className="rounded-2xl overflow-hidden border border-white/15 hover:border-cyan-400/50 shadow-xl p-5 sm:p-6 bg-[#061528] flex flex-col justify-between cursor-pointer group flex-1"
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono text-white/60">
                        {news.date}
                      </span>
                      <span className="text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-white/10 text-cyan-200">
                        {news.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug mb-2 line-clamp-2">
                      {news.title}
                    </h4>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:text-white transition-colors">
                      <span>{news.linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#061528] border border-cyan-500/40 text-white shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-cyan-300 mb-2">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.badge}</span>
                <span>•</span>
                <span>TSXV: BLU</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                {selectedArticle.title}
              </h3>

              <div className="h-44 w-full rounded-xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                {selectedArticle.summary}
              </p>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <a
                  href={selectedArticle.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#31b1ba] hover:bg-cyan-500 text-white font-medium text-xs transition-all shadow-md"
                >
                  <span>Official Release on BluEnergies.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
