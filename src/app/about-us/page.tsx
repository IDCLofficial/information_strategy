import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { teamMembers } from "./teamMembers";
import TeamGridSection from "./TeamGridSection";
import { getHomeData } from '@/app/data/resourceData';


export default function AboutUs() {
    const homeData = getHomeData();
    return (
        <div className="h-screen">
            <AboutUsHero ministryName={homeData?.header_navigation?.logo_title || "Ministry of Information, Public Orientation and Strategy"} />
            <AboutSection 
                aboutText="The Imo State Ministry of Information, Public Orientation and Strategy is the authoritative state body responsible for shaping policy, regulating operations, managing infrastructure projects, and overseeing environmental and community engagement within Imo's information and communication sector. The ministry ensures that information dissemination is conducted legally, sustainably, and with equitable benefits for the state's citizens, focusing heavily on expanding domestic information access, reducing misinformation, and enhancing digital communication growth. The ministry plays a central role in shaping policy, regulating operations, managing infrastructure projects, and leading public engagement within Imo's information and communication sector. It ensures information services are legal, sustainable, and beneficial to citizens"
                imgSrc="/images/aboutImage.jpeg" 
                altText="Ministry of Information, Public Orientation and Strategy conference event" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Partner with Us to Transform the Information and Communication sector in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}