import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Services offered by the Ministry of Information & Strategy of the Imo State Government.",
  path: "/services",
});


export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection 
                heading="Together for an Informed Imo State"
                subtext="Stay connected with the stories, policies, and strategies shaping our shared future."
                buttonLabel="Contact Us" 
                buttonHref="/contact-us"
            />
            <Footer />
        </div>
    );
}