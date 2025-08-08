"use client"
import { Title } from "../components/Title";
import { SubsequentHero } from "../components/Hero";
import { motion } from "framer-motion";

interface AboutUsHeroProps {
    ministryName: string;
}

export const AboutUsHero = ({ ministryName }: AboutUsHeroProps) => {
    return (
        <SubsequentHero className="bg-[url('/images/gradient.png')] bg-cover bg-center">
            {/* Navigation Highlight */}
            <div className="relative z-10 flex justify-center">
                <Title label="About Us" />
            </div>
            <div className="relative z-10 flex justify-center">
                <div className="w-full lg:w-[70%] flex flex-col items-center text-center">
                    <motion.h1
                        className="text-2xl md:text-[3rem] font-bold text-white leading-tight break-normal"
                        initial={{ opacity: 1 }}
                        animate={{}}
                    >
                        {`${ministryName}`.split(" ").map((word, wordIdx, arr) => (
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
                                {/* Add space after word except last */}
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
            </div>
        </SubsequentHero>
    );
}; 