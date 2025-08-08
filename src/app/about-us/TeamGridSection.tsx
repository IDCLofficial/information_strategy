import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
}

const TeamGridSection: React.FC<TeamGridSectionProps> = ({ members }) => {
  return (
    <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto" id="team">
      <h2 className="text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-6 md:mb-10 text-dark-primary">Our Team</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10" id="team">
        {members.map((member, idx) => (
          <div key={idx} className="w-[250px] flex flex-col rounded-xl shadow-md border border-gray-200 hover:scale-105 transition-all p-3">
            <div className="w-full h-[250px] mb-2 lg:mb-4 relative">
              <Image src={member.imgSrc} alt={member.name} width={1280} height={1280} className="object-cover w-full h-full rounded-xl" />
            </div>
            <h3 className="text-lg font-semibold text-[#232c39] mb-1">{member.name}</h3>
            <span className="text-green-600 text-xs md:text-sm font-medium">{member.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGridSection; 