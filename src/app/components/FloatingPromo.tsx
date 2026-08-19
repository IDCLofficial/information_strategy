"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiX, FiBookOpen } from "react-icons/fi";

export default function FloatingPromo() {
  const [dismissed, setDismissed] = useState(false);
  const prefersReduced = useReducedMotion();
  const pathname = usePathname();

  if (dismissed || pathname === "/imo-at-50") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.5 }}
        className="fixed bottom-6 right-6 z-50 max-w-[220px]"
      >
        <div className="relative bg-white border border-black/10 rounded-xl p-4 shadow-xl shadow-black/10">
          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-[#777777]/60 hover:text-[#1E1E1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#119156] rounded"
            aria-label="Dismiss promotional element"
          >
            <FiX size={14} />
          </button>

          <Link
            href="/imo-at-50"
            className="block group"
          >
            <div className="flex items-center gap-2 mb-2">
              <FiBookOpen size={16} className="text-[#119156]" />
              <span className="text-xs font-bold text-[#1E1E1E] tracking-wide">
                IMO @ 50
              </span>
            </div>
            <p className="text-[11px] text-[#777777] leading-snug group-hover:text-[#1E1E1E] transition-colors">
              Explore the official publication →
            </p>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
