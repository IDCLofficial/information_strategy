'use client';

import Image from "next/image";
import { AppLink } from "./AppLink";
import { motion } from "framer-motion";

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 md:py-20 flex justify-center">
        <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-18 w-full px-4 md:px-[3rem]"
        >
            {/* Left: Commissioner Image */}
            <div className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full md:w-auto flex justify-center">
                <div className="relative w-full h-[380px] sm:w-[380px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    width={450}
                    height={450}
                    className="object-cover h-full w-full object-center rounded-xl"
                    />
                </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-dark-primary mb-4">{title}</h2>
                <p className="text-dark-primary-body text-base mb-4">
                    Hon. Declan Mbadiwe Emelumba is the Commissioner for Information, Public Orientation and Strategy in Imo State under Governor Hope Uzodimma&apos;s administration. He is an accomplished author, philanthropist, and politician with a passion for touching the lives of the needy and elevating poverty by empowering individuals and communities.
                </p>
                <p className="text-dark-primary-body text-base mb-4 text-justify">
                    Declan Emelumba&apos;s journey in public service began in the Imo State House of Assembly, where he provided cash capital to 100 very poor women whose livelihood depended on frying akara or selling meager foodstuff ingredients in the market. He has also trained unemployed youths in various skills such as hairdressing, barbing, auto mechanics, welding, and carpentry, helping them start their own businesses. Additionally, he provided 20 women with ladies&apos; motorcycles to uplift their social status by improving their mobility for business ventures.
                </p>
                <p className="text-dark-primary-body text-base mb-6 text-justify">
                    As Commissioner, Emelumba has been instrumental in addressing the security challenges in Imo State, which he describes as politically motivated. He has emphasized that the security situation in the state has improved significantly due to the determination of the governor and support from the presidency. He is also known for his work in communications and public orientation, helping to bridge the information gap between the government and citizens through responsible journalism and strategic messaging.
                </p>
                {/* <AppLink href="/about-us/team/#team" label="Our Team" variant="primary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium hover:bg-white hover:text-black transition-all duration-300"/> */}
            </div>
        </motion.div>
    </section>
  );
} 