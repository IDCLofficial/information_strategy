"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { publication, previewPages } from "./data";

// Each page = 1 viewport height of scroll
const PAGE_MULTIPLIER = 1;

function getPageState(
  scrollProgress: number,
  index: number,
  total: number
) {
  const segment = 1 / (total * PAGE_MULTIPLIER);
  const start = index * segment;

  // Phase 1: entering — first 20% of segment
  const enterEnd = start + segment * 0.2;
  // Phase 2: visible — middle 40%
  const holdEnd = start + segment * 0.6;
  // Phase 3: exiting — last 40%
  const exitEnd = start + segment;

  if (scrollProgress < start) {
    return { opacity: 0, scale: 0.97, phase: "waiting" as const };
  }

  if (scrollProgress < enterEnd) {
    const t = (scrollProgress - start) / (enterEnd - start);
    const eased = 1 - Math.pow(1 - t, 3);
    return { opacity: eased, scale: 0.97 + 0.03 * eased, phase: "entering" as const };
  }

  if (scrollProgress < holdEnd) {
    return { opacity: 1, scale: 1, phase: "visible" as const };
  }

  if (scrollProgress < exitEnd) {
    const t = (scrollProgress - holdEnd) / (exitEnd - holdEnd);
    const eased = t * t;
    return { opacity: 1 - eased, scale: 1 - 0.03 * eased, phase: "exiting" as const };
  }

  return { opacity: 0, scale: 0.97, phase: "done" as const };
}

/* ── Preload all preview images on mount ─────────────────────── */

function usePreloadImages() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const allSrcs = [publication.coverImage, ...previewPages.map((p) => p.src)];

    if (allSrcs.length === 0) {
      setReady(true);
      return;
    }

    allSrcs.forEach((src) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loaded++;
        if (loaded >= allSrcs.length) setReady(true);
      };
      img.src = src;
    });

    const timeout = setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 4000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  return ready;
}

export default function BookPreview() {
  const prefersReduced = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesReady = usePreloadImages();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = previewPages.length;
  const totalScrollHeight = total * PAGE_MULTIPLIER;

  const floatingOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <>
      {/* Floating download CTA */}
      <motion.a
        href={publication.downloadUrl}
        download
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        style={{ opacity: floatingOpacity }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#119156] text-white text-sm font-semibold shadow-lg shadow-[#119156]/25 hover:bg-[#0e7a47] hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#119156] focus:ring-offset-2"
        aria-label={publication.downloadLabel}
      >
        <FiDownload size={16} />
        <span className="hidden sm:inline">{publication.downloadLabel}</span>
      </motion.a>

      {/* Tall scroll container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${totalScrollHeight * 100}vh` }}
      >
        {/* Sticky viewport — dark premium backdrop */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1f2e] via-[#161b26] to-[#111621]">
          {/* Subtle grain/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

          {/* Soft radial glow behind the book */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(17,145,86,0.06)_0%,_transparent_60%)]" />
          {/* Loading state */}
          {!imagesReady && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-2 border-[#119156] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-white/50">Loading preview…</p>
              </div>
            </div>
          )}

          {/* Page stack — all pages rendered, opacity/scale controlled by scroll */}
          <div className="absolute inset-0 flex items-center justify-center">
            {imagesReady &&
              previewPages.map((page, i) => (
                <ScrollPage
                  key={i}
                  page={page}
                  index={i}
                  total={total}
                  scrollProgress={scrollYProgress}
                  prefersReduced={prefersReduced}
                />
              ))}
          </div>

          {/* Page label */}
          {imagesReady && (
            <FloatingLabel scrollProgress={scrollYProgress} total={total} />
          )}

          {/* Progress bar */}
          {imagesReady && (
            <ProgressBar scrollProgress={scrollYProgress} />
          )}
        </div>
      </div>
    </>
  );
}

/* ── Individual scroll page — fade + subtle zoom ─────────────── */

function ScrollPage({
  page,
  index,
  total,
  scrollProgress,
  prefersReduced,
}: {
  page: (typeof previewPages)[number];
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  prefersReduced: boolean;
}) {
  const [state, setState] = useState<{
    opacity: number;
    scale: number;
    phase: string;
  }>({
    opacity: index === 0 ? 1 : 0,
    scale: 1,
    phase: index === 0 ? "visible" : "waiting",
  });

  useMotionValueEvent(scrollProgress, "change", (v) => {
    if (prefersReduced) {
      const currentIdx = Math.min(
        Math.floor(v * total * PAGE_MULTIPLIER),
        total - 1
      );
      setState({
        opacity: currentIdx === index ? 1 : 0,
        scale: 1,
        phase: currentIdx === index ? "visible" : "done",
      });
      return;
    }
    setState(getPageState(v, index, total));
  });

  const isVisible = state.phase !== "waiting" && state.phase !== "done";

  return (
    <div
      className="absolute inset-0 flex items-center justify-center px-4"
      style={{
        opacity: isVisible ? state.opacity : 0,
        transform: `scale(${state.scale})`,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="relative w-[70vw] sm:w-[55vw] md:w-[45vw] max-w-3xl">
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-white ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <Image
            src={page.src}
            alt={page.alt}
            fill
            sizes="(max-width: 640px) 70vw, (max-width: 768px) 55vw, 45vw"
            className="object-contain"
            loading="eager"
            priority
          />

          {/* Page label */}
          <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none">
            <span className="text-xs sm:text-sm font-medium text-[#1E1E1E]/70">
              {page.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Floating page label ────────────────────────────────────── */

function FloatingLabel({
  scrollProgress,
  total,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useMotionValueEvent(scrollProgress, "change", (v) => {
    if (!spanRef.current) return;
    const idx = Math.min(
      Math.max(Math.floor(v * total * PAGE_MULTIPLIER) + 1, 1),
      total
    );
    spanRef.current.textContent = String(idx);
  });

  return (
    <div className="absolute top-24 left-6 sm:left-10 z-10">
      <p className="text-xs sm:text-sm text-white/40">
        <span className="font-semibold text-white/80">
          <span ref={spanRef}>1</span>
        </span>
        {" / "}
        <span className="text-white/40">{total}</span>
        <span className="ml-2 text-[10px] sm:text-xs text-white/25">
          · {publication.totalPages} pages total
        </span>
      </p>
    </div>
  );
}

/* ── Progress bar ───────────────────────────────────────────── */

function ProgressBar({
  scrollProgress,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scaleX = useTransform(scrollProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 z-10">
      <motion.div
        className="h-full bg-[#119156] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
