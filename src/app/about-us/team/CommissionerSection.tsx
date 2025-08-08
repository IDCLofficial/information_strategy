import Image from "next/image";
import React from "react";

interface CommissionerSectionProps {
  imgSrc: string;
  heading: string;
  description: string;
}

const CommissionerSection: React.FC<CommissionerSectionProps> = ({ imgSrc, heading, description }) => {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-20 mx-auto">
      <div className="w-full md:w-auto flex-shrink-0 flex justify-center">
        <Image src={imgSrc} alt="Commissioner" width={300} height={300} className="rounded-xl object-cover w-full h-[350px] md:w-[400px] md:h-[340px]" />
      </div>
      <div className="flex-1 w-full mt-4 md:mt-0">
        <h2 className="text-lg md:text-[43px] font-medium mb-2 md:mb-4 text-dark-primary">{heading}</h2>
        <p className="text-gray-700 text-base md:text-[1rem] leading-relaxed text-justify whitespace-pre-line">
        Honourable Chief Cosmas Nwabueze Maduba, a native of Isunjaba in Isu Local Government Area of Imo State, currently serves as the Commissioner for Agriculture and Food Security. Prior to this role, he was the Commissioner for Works, where he played a key role in infrastructure development. As Agriculture Commissioner, he has launched impactful initiatives, including the distribution of 15,000 bags of maize to civil servants, provision of fertilizers, herbicides, insecticides, and modern farming tools to farmers. He also partnered with SIAT Nigeria Ltd to boost palm oil production and actively promotes rural development through the Imo-CARES program. His integrated approach bridges agriculture and livestock development to strengthen food security and empower local farmers.
        </p>
      </div>
    </section>
  );
};

export default CommissionerSection; 