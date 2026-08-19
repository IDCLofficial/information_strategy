"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { publication } from "./data";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5ee] via-[#F7F9FA] to-[#F7F9FA]" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,145,86,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1E1E1E] tracking-tight leading-none">
            {publication.title}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-[#777777] tracking-[0.3em] font-light"
        >
          {publication.subtitle}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-8 mb-10 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#119156] to-transparent"
        />

        {/* Description */}
        <motion.p
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base text-[#777777] max-w-lg mb-12 leading-relaxed"
        >
          A celebration of fifty years of Imo State — its history, culture,
          people, and progress.
        </motion.p>

        {/* Book cover */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]"
        >
          {/* Shadow beneath the book */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/15 rounded-full blur-xl" />

          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-black/5">
            <Image
              src={publication.coverImage}
              alt={`${publication.title} — Publication cover`}
              fill
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#777777] tracking-widest uppercase">
            Explore
          </span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[#777777]/50 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#777777]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
