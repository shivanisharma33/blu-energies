"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

// Full HD on laptops/desktops; a lighter 720p encode for phones and tablets.
const SOURCES = [
  { src: "/videos/ship-hero-1080.mp4", media: "(min-width: 1024px)" },
  { src: "/videos/ship-hero-720.mp4" },
];
const POSTER = "/videos/ship-hero-poster.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Respect reduced-motion: keep the poster frame instead of autoplaying.
  // isPlaying follows the element's own play/pause events.
  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Poster shown until the first frame is ready */}
        <img
          src={POSTER}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          onLoadedData={() => setIsLoaded(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
        >
          {SOURCES.map((s) => (
            <source key={s.src} src={s.src} type="video/mp4" media={s.media} />
          ))}
        </video>

        {/* Cinematic grading: left contrast, vignette, top/bottom fades */}
        <div className="absolute inset-0 bg-[#040d1a]/10" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-gradient-to-r from-[#040d1a]/85 via-[#040d1a]/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(4,13,26,0.55)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040d1a]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040d1a] via-[#040d1a]/60 to-transparent" />
      </div>

      {/* Playback control (WCAG 2.2.2: moving content must be pausable) */}
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        className="absolute z-20 right-5 sm:right-8 bottom-5 sm:bottom-8 glass-pill w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
    </>
  );
}
