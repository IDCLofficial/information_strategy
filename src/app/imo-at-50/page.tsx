import type { Metadata } from "next";
import { publication } from "./data";
import HeroSection from "./HeroSection";
import BookPreview from "./BookPreview";
import DownloadCTA from "./DownloadCTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: `${publication.title} — ${publication.subtitle}`,
  description: `Explore a digital preview of the official ${publication.title} publication celebrating fifty years of Imo State. Browse selected pages and download the complete ${publication.totalPages}-page document.`,
  openGraph: {
    title: `${publication.title} — ${publication.subtitle}`,
    description: `Explore a digital preview of the official ${publication.title} publication celebrating fifty years of Imo State.`,
    type: "website",
  },
};

export default function ImoAt50Page() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      <HeroSection />
      <BookPreview />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
