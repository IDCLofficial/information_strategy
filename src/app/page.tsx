import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";
import { getHomeData } from "@/app/data/resourceData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "Ministry of Information & Strategy | Imo State Government" },
  description: "Official website of the Ministry of Information & Strategy, Imo State Government: services, departments, projects, news and events.",
  path: "/",
});


export default function Home() {
  const homeData = getHomeData();
  
  return (
    <div className="h-screen w-full">
      <Hero
        title={homeData.header_navigation.logo_title}
        caption={homeData.hero_banner_slides.welcome_statement.vision}
        subtitle={homeData.hero_banner_slides.welcome_statement.mission}
      />
      <AboutSection 
        title="About Us"
        subtitle={homeData.commissioner_section.welcome_statement}
        image1="/images/homeImage1.jpeg"
        image2="/images/homeImage2.jpeg"
      />
      <AboutCommisioner 
        imgSrc="/images/commisioner.jpg" 
        title={homeData.commissioner_section.title}
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        {/* Promise needs to get the people they are partnering with <FeaturedPartners /> */}
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Together for an Informed Imo State"
        subtext="Stay connected with the stories, policies, and strategies shaping our shared future."
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
