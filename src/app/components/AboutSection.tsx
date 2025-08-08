import Image from "next/image";
import { Title } from "./Title";
import { AppLink } from "./AppLink";
import PageTransition from "./PageTransition";

interface AboutSectionProps {
    title: string;
    subtitle: string;
    image1: string;
    image2: string;
}

export default function AboutSection({title, subtitle, image1, image2}: AboutSectionProps) {
  return (
    <section className={`relative w-full p-4 md:px-4 py-12 md:py-20 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover shadow-lg overflow-hidden`}>
      <div className="flex flex-col gap-8 items-left w-full md:w-[90%] mx-auto">
        {/* Left: Text Content */}
        <div className="flex flex-col lg:flex-row lg:items-center h-full justify-between w-full gap-6 lg:gap-0">
          <PageTransition type="fadeUp">
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <Title label={title}/>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight py-4">
                  Our Mandate — Mininstry of <br/>
                  <span className="text-green-400"> Information and Strategy</span>
                </h2>
              </div>
              <div className="relative rounded-lg overflow-hidden w-full lg:w-[70%] h-[180px] md:h-[350px] lg:hidden">
                <Image src={image1} alt="Mandate 1" fill className="object-fit" />
              </div>
            </PageTransition>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <PageTransition type="fadeUp">
                  <p className="text-gray-200 text-[1rem] md:text-[16px] lg:max-w-lg text-left text-lg">
                      {subtitle}
                  </p>
                </PageTransition>
                <AppLink href="/about-us" label="Learn More" variant="secondary" className="border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] 
                font-medium hover:bg-primary-green hover:text-white transition-all duration-300 w-max hidden lg:block"/>
              </div>
        </div>
        {/* Right: Images */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-center">
          <div className="relative rounded-lg overflow-hidden w-full md:w-[70%] h-[180px] lg:h-[380px] max-lg:hidden">
            <Image src={image1} alt="Mandate 1" fill className="object-cover h-full w-full" />
          </div>
          <div className="relative rounded-lg overflow-hidden w-full lg:w-[30%] h-[180px] md:h-[350px] lg:h-[380px] flex items-center justify-center">
            <Image src={image2} alt="Mandate 2" fill className="object-cover h-full w-full" />
          </div>
        </div>

        <AppLink href="/about-us" label="Learn More" variant="secondary" className="w-max border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] 
        font-medium hover:bg-primary-green hover:text-white transition-all duration-300 lg:hidden"/>
      </div>
    </section>
  );
}
