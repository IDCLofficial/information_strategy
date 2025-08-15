"use client"

import { useState } from "react";
import Image from "next/image";
import { getDepartmentsData } from '@/app/data/resourceData';


export default function UnitsTabsSection() {
  const departmentsData = getDepartmentsData();
  
  // Create department objects from resource.json data
  const departments = departmentsData?.departments_list?.map((department: { name: string; description: string; imgSrc: string; }) => ({
    name: department.name,
    description: department.description,
    image: department.imgSrc
  })) || [];
  
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full mx-auto flex flex-col md:flex-row gap-8 py-16 px-4 md:px-8">
      {/* Tabs */}
      <div className="w-full md:w-2/6 border-r pr-4">
        <ul className="space-y-2 flex gap-2 md:flex-col md:gap-2 overflow-x-auto">
          {departments.map((dept, idx) => (
            <li key={dept.name} className="flex-1">
              <button
                className={`w-full text-left px-4 py-2 rounded border text-nowrap ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-gray-300 md:border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1 px-4 md:px-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">{active.name}</h2>
        <div className="w-full mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-fill h-[250px] md:h-[400px]" />
        </div>
        <p className="text-dark-primary-body text-base md:text-[1rem]">{active.description}</p>
      </div>
    </section>
  );
}