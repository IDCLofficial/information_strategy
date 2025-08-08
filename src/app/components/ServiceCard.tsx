import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({ imgSrc, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center p-6 h-full">
      <div className="w-20 h-20 mb-4 relative flex items-center justify-center">
        <Image src={imgSrc} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-base md:text-lg font-semibold mb-2 text-center uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 text-sm text-center">{description}</p>
    </div>
  );
} 