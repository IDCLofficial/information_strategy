"use client"
import { SubsequentHero } from "../components/Hero";
import { Title } from "../components/Title";
import { motion } from "framer-motion";
import { getDepartmentsData } from '@/app/data/resourceData';

export default function UnitsHeroSection() {
  const departmentsData = getDepartmentsData();
  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')] bg-cover bg-center">
      <div className="relative z-10 flex justify-center">
        <Title label="Departments" />
      </div>
      <div className="relative z-10 flex justify-center">
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold text-center leading-tight py-2"
          initial={{ opacity: 1 }}
          animate={{}}
        >
          {"Departments Driving Our Vision".split(" ").map((word, wordIdx, arr) => (
            <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 * (arr.slice(0, wordIdx).join(" ").length + wordIdx + charIdx) }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIdx < arr.length - 1 && (
                <motion.span
                  key={`space-${wordIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 * (arr.slice(0, wordIdx + 1).join(" ").length + wordIdx) }}
                  style={{ display: "inline-block" }}
                >
                  {"\u00A0"}
                </motion.span>
              )}
            </span>
          ))}
        </motion.h1>
      </div>
    </SubsequentHero>
  );
} 