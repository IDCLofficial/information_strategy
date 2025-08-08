import Image from "next/image";
import Link from "next/link";

const advert = {
    title: "SKill-Up Imo",
    desc: "The Imo State Ministry of Digital Economy and eGovernment heralds an enabling environment to galvanize ground-breaking innovations that will address societal challenges and enhance efficient public service delivery through the intensive and extensive deployment of digital technology.",
    img: "/images/advert_flier.png",
    link: "/register",
    linkText: "Register Now",
    link2: "/talents",
    link2Text: "Meet Our Talents",
}

export default function Advertisement() {
  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-12 bg-white flex flex-col md:flex-row justify-between items-center gap-8 md:gap-18">
      {/* Flier Image */}
      <div className="w-full md:w-[500px] border border-[#7d7dbb] bg-[#d6f5d6] rounded-sm flex-shrink-0 flex justify-center">
        <div className="relative w-full h-[180px] md:h-[260px] md:w-[500px]">
          <Image src="/images/advert_flier.png" alt="SkillUp Imo Flier" fill className="object-cover" />
        </div>
      </div>
      {/* Text and Actions */}
      <div className="flex flex-col items-start justify-center w-full md:w-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{advert.title}</h2>
        <p className="text-gray-700 text-xs md:text-base mb-4 md:mb-6 max-w-xl">
          {advert.desc}
        </p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Link href={advert.link} className="bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded shadow transition text-xs md:text-sm text-center">{advert.linkText}</Link>
          <Link href={advert.link2} className="border border-green-700 text-green-700 font-medium px-5 py-2 rounded shadow-sm transition text-xs md:text-sm text-center hover:bg-green-50">{advert.link2Text}</Link>
        </div>
      </div>
    </section>
  );
} 