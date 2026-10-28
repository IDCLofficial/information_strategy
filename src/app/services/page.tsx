import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Government Publicity, Media Relations and Communication",
  description: "Government publicity, media relations, public enlightenment campaigns, strategic communication, digital media monitoring and publications for Imo State.",
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