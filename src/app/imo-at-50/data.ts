const R2_BASE = process.env.NEXT_PUBLIC_R2_ASSET_URL ?? "";

export interface PreviewPage {
  src: string;
  alt: string;
  label: string;
}

export const publication = {
  title: "IMO AT 50",
  subtitle: "1976 — 2026",
  description:
    "A comprehensive publication celebrating fifty years of Imo State — its history, culture, people, and development.",
  totalPages: 378,
  downloadLabel: "Download the full publication",
  downloadUrl: `${R2_BASE}/IMO AT 50 ALL PAGES+.pdf`,
  coverImage: `${R2_BASE}/imo-at-50/cover.png`,
} as const;

export const previewPages: PreviewPage[] = [
  {
    src: `${R2_BASE}/imo-at-50/preview/page-001.png`,
    alt: "Imo at 50 — Cover page",
    label: "Cover",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-005.png`,
    alt: "Imo at 50 — Foreword",
    label: "Foreword",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-002.png`,
    alt: "Imo at 50 — Table of Contents",
    label: "Contents",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-003.png`,
    alt: "Imo at 50 — Table of Contents",
    label: "Contents",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-004.png`,
    alt: "Imo at 50 — Table of Contents",
    label: "Contents",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-006.png`,
    alt: "Imo at 50 — Introduction",
    label: "Introduction",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-007.png`,
    alt: "Imo at 50 — Introduction",
    label: "Introduction",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-008.png`,
    alt: "Imo at 50 — Introduction",
    label: "Introduction",
  },
  {
    src: `${R2_BASE}/imo-at-50/preview/page-009.png`,
    alt: "Imo at 50 — Map of Imo State",
    label: "Map of Imo State",
  },
];
