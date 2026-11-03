"use client";

import React from "react";

const ITEMS = [
  "Deepwater Exploration",
  "3D Seismic Imaging",
  "Basin Floor Fan Plays",
  "West Africa Transform Margin",
  "Responsible Operations",
  "TSXV: BLU",
];

export default function MarqueeBand() {
  // Rendered twice so the -50% translate loops seamlessly.
  const row = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden
      className="relative z-20 w-full overflow-hidden bg-[#040d1a] border-y border-white/10 py-5 select-none"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 text-2xl sm:text-3xl font-serif text-white/80 whitespace-nowrap"
          >
            {item}
            <span className="w-2 h-2 rotate-45 bg-[#31b1ba]" />
          </span>
        ))}
      </div>
    </div>
  );
}
