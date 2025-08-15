"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ServiceCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({ imgSrc, title, description }: ServiceCardProps) {
  const [mounted, setMounted] = useState(false);
  const [delay, setDelay] = useState<number>(0); // ensure SSR/CSR match

  useEffect(() => {
    // Compute delay on client only to prevent SSR/CSR mismatch
    setDelay(Math.floor(Math.random() * 400));
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={
        `bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-6 h-full ` +
        `transform transition-all duration-700 ease-out ` +
        `${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full h-[200px] mb-4 relative flex items-center justify-center">
        <Image src={imgSrc} alt={title} width={50} height={50} className="object-contain w-full h-full aspect-square" />
      </div>
      <h3 className="text-xl md:text-lg font-semibold mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-dark-primary-body text-base">{description}</p>
    </div>
  );
}