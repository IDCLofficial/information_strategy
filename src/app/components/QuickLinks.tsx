"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getHomeData } from "@/app/data/resourceData";

const getMenuLinks = () => {
  const homeData = getHomeData();
  const menuItems = homeData.header_navigation.main_menu;
  
  // Map menu items to link objects with descriptions and images
  return menuItems
    .filter(item => item !== "Home") // Exclude Home since we're already on the home page
    .map((item, index) => {
      const href = `/${item.toLowerCase().replace(/ /g, '-')}`;
      
      // Provide appropriate descriptions and images based on the menu item
      let desc = "";
      let img = "";
      
      switch(item) {
        case "About Us":
          desc = "Learn more about our mission and vision";
          img = "/images/homeImage1.jpg";
          break;
        case "Departments":
          desc = "Explore our various departments and agencies";
          img = "/images/homeImage2.jpg";
          break;
        case "Services":
          desc = "Discover our comprehensive range of services";
          img = "/images/homeImage1.jpg";
          break;
        case "Contact Us":
          desc = "Get in touch with our team";
          img = "/images/homeImage3.jpg";
          break;
        default:
          desc = `Explore our ${item.toLowerCase()} section`;
          img = "/images/gradient.png";
      }
      
      return {
        title: item,
        desc: desc,
        img: img,
        href: href
      };
    });
};

export default function QuickLinks() {
  const links = getMenuLinks();
  
  // Duplicate links for infinite scroll effect
  const duplicatedLinks = [...links, ...links];

  return (
    <motion.section 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5, ease: "linear" }}
      className="w-full px-4 md:px-8 py-10 bg-gray-200 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-12"
      >
        Quick Links
      </motion.h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedLinks.map((link, index) => (
            <div key={`${link.href}-${index}`} className="inline-block mx-2 md:mx-4">
              <Link 
                href={link.href} 
                className="flex flex-col justify-between relative p-4 md:p-6 bg-white w-[250px] h-[180px] shadow-md hover:scale-105 transition-all duration-300">
                <div>
                  <h3 className="text-dark-secondary text-base md:text-lg font-bold mb-2">{link.title}</h3>
                  <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6 text-wrap">{link.desc}</p>
                </div>
                <span className="self-end bg-green-700 hover:bg-green-800 text-white w-8 max-h-8 flex items-center justify-center transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </motion.section>
  );
} 