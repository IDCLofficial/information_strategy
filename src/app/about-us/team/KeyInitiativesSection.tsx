import Image from "next/image";
import React from "react";

interface KeyInitiativesSectionProps {
  initiatives: string[];
  imgSrc: string;
}

const KeyInitiativesSection: React.FC<KeyInitiativesSectionProps> = ({ initiatives, imgSrc }) => {
  return (
    <section className="w-full bg-[#f3f8fa] py-10 md:py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-20 max-w-6xl mx-auto">
      <div className="w-full md:flex-1 order-2 md:order-1">
        <h2 className="text-lg md:text-[43px] font-medium mb-2 md:mb-4 text-dark-primary">Key Initiatives</h2>
        <ul className="list-disc pl-5 space-y-2 md:space-y-4 text-dark-primary-body text-sm md:text-[1rem]">
          {initiatives.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[400px] order-1 md:order-2 flex justify-center mb-4 md:mb-0">
        <Image src={imgSrc} alt="Key Initiatives" width={400} height={400} className="rounded-xl object-cover shadow-lg w-full h-[180px] md:w-[400px] md:h-[400px] min-h-[180px] md:min-h-[400px]" />
      </div>
    </section>
  );
};

export default KeyInitiativesSection; 