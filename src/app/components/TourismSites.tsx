import Image from "next/image";
import { AppLink } from "./AppLink";
import Link from "next/link";
import { tourismSites } from "../sites/tourismSites";

export default function TourismSites() {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-16 bg-[#f3f8fa]">
      <h2 className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Explore Our Tourism Sites</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4 mb-8">
        {tourismSites.slice(0, 6).map((site, idx) => (
          <Link 
            key={idx} 
            href={`/news/${site.title.toLowerCase().replace(/\s+/g, '-')}`} 
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-[140px] md:h-[180px]">
              <Image src={site.img} alt={site.title} fill className="object-cover" />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-dark-secondary text-base md:text-[15px] font-bold text-gray-900 mb-2 uppercase leading-snug">{site.title}</h3>
              <p className="text-dark-primary-body text-gray-700 text-base md:text-sm mb-2 md:mb-4 max-w-[98%] line-clamp-3 overflow-hidden text-ellipsis">{site.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <AppLink href="/news" label="Explore More" variant="primary" className="border border-1 border-primary-green text-[14px] px-[2rem] py-[12px] rounded-[3.4px] font-medium hover:bg-primary-green/80 
        hover:text-white transition-all duration-300"/>
      </div>
    </section>
  );
} 