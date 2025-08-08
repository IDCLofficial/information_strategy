'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/images/FMAFS.png", alt: "Federal Ministry of Agriculture and Food Security" },
  { src: "/images/IFAD.png", alt: "International Fund for Agricultural Development (IFAD)" },
  { src: "/images/FAO.svg", alt: "Food and Agriculture Organization (FAO)" },
  { src: "/images/afdb.png", alt: "African Development Bank (AfDB)" },
  { src: "/images/worldBank.png", alt: "World Bank / FADAMA" },
  { src: "/images/SIAT.png", alt: "SIAT Nigeria Ltd" },
  { src: "/images/NALDA.jpg", alt: "National Agricultural Land Development Authority (NALDA)" },
  { src: "/images/nirsal.jpg", alt: "Nigeria Incentive-Based Risk Sharing System for Agricultural Lending (NIRSAL)" },
  { src: "/images/CBN.png", alt: "Central Bank of Nigeria (CBN)" },
];

export default function FeaturedPartners() {
  return (
    <section className="w-full py-20 bg-[#f7f9fa]">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-[43px] font-medium text-center mb-10"
      >
        Featured Partners
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap"
      >
        <div className="inline-block animate-scroll">
          {partners.concat(partners).map((partner, idx) => (
            <div key={idx} className="inline-block mx-8">
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center w-[150px] h-[80px]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={60}
                  height={60}
                  className="object-contain inline-block align-middle h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}