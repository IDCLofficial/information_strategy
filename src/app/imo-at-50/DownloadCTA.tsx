"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiBookOpen } from "react-icons/fi";
import { publication } from "./data";

export default function DownloadCTA() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <section className="relative w-full py-28 sm:py-36 px-4 bg-white">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-[#119156]/10 flex items-center justify-center">
            <FiBookOpen size={24} className="text-[#119156]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 leading-tight">
            The Full Publication
          </h2>

          <p className="text-base sm:text-lg text-[#777777] mb-4 max-w-lg mx-auto leading-relaxed">
            You&apos;ve seen a glimpse. Now explore every page.
          </p>

          <p className="text-sm text-[#777777]/70 mb-12 max-w-md mx-auto">
            All {publication.totalPages} pages of the {publication.title}{" "}
            publication — a comprehensive record of fifty years of Imo State.
          </p>

          <a
            href={publication.downloadUrl}
            download
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#119156] text-white font-bold text-base sm:text-lg hover:bg-[#0e7a47] transition-all duration-200 shadow-lg shadow-[#119156]/20 hover:shadow-xl hover:shadow-[#119156]/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#119156] focus:ring-offset-2 focus:ring-offset-white"
          >
            <FiDownload
              size={20}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
            {publication.downloadLabel}
          </a>

          <p className="mt-8 text-xs text-[#777777]">
            PDF · approximately 240 MB
          </p>
        </motion.div>
      </div>
    </section>
  );
}
