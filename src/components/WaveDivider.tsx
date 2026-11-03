import React from "react";

interface WaveDividerProps {
  from: string; // colour of the section above
  to: string; // colour of the section below
  flip?: boolean;
}

// Layered wave edge used where a dark section meets a light one.
export default function WaveDivider({ from, to, flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className="relative z-20 w-full -my-px leading-[0] pointer-events-none"
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block w-full h-14 sm:h-20 lg:h-24 ${flip ? "-scale-x-100" : ""}`}
      >
        <path
          d="M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,56 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.35"
        />
        <path
          d="M0,88 C200,56 420,120 720,84 C1020,48 1240,104 1440,80 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
