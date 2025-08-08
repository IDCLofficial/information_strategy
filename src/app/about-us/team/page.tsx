"use client"
import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `Before his appointment, Dr. Amadi served at the Nigerian Communications Commission (NCC), where he held key roles in departments such as Procurement, Projects, Compliance, Monitoring and Enforcement, and Research and Development. He notably headed the Emerging Technology Unit, focusing on cutting-edge ICT initiatives and fostering collaboration between academia and industry through programs like ACADOPRENEUR.
\nAs Commissioner, Dr. Amadi introduced the Digital Imo Agenda, aiming to train 100,000 youths, women, and individuals with disabilities in essential 21st-century digital skills, including software development, blockchain, and game development. This initiative is part of a broader mission to build smart cities that leverage digital technology to drive governance, innovation, and entrepreneurship, promoting transformative value creation and prosperity for all.`;

const initiatives = [
  "Agricultural Extension Services – On-field support and training for farmers, access to crop and livestock specialists, soil testing and advisory services.",
  "Farmer Registration Portal – Link to register as a farmer in Imo State, access to inputs, subsidies, and grants, downloadable registration forms.",
  "Grant & Subsidy Application – Information on how to apply for: Fertilizer subsidies, Equipment leasing, Youth-in-Agric programs; link to downloadable forms and requirements.",
  "Land Allocation for Farming – How to apply for agricultural land, land use policy documents, contact details for land processing unit.",
  "Veterinary Services – Animal healthcare and vaccinations, schedule of mobile vet clinic visits, request service button.",
  "Agro-Processing & Storage Support – Info on available state silos and storage centers, assistance for small-scale processors, public-private collaboration guidelines.",
  "Market Linkage Services – Help connecting farmers to local and international buyers, announcements of upcoming market days and trade expos."
];

const teamMembers = Array(6).fill({
  name: "Magreth Nonso",
  position: "Position",
  imgSrc: "/images/team.png" // Use a placeholder or real image if available
});

export default function TeamPage() {
  return (
    <main className="min-h-screen w-full bg-[#f3f8fa] flex flex-col">
      <HeroSection
        heading="Leadership Behind the Ministry of Agriculture"
      />
      <CommissionerSection
        imgSrc="/images/user.png"
        heading="Background and Vision"
        description={commissionerDescription}
      />
      <KeyInitiativesSection
        initiatives={initiatives}
        imgSrc="/images/agriculture.jpg"
      />
      <TeamGridSection members={teamMembers} />
      <div className="w-full bg-dark-primary text-center py-8 px-4">
        <p className="text-center text-[1rem] font-regular text-white w-[90%] lg:w-[60%] mx-auto">
        The Ministry of Agriculture and Food Security in Imo State was established to spearhead agricultural development and rural transformation. Since its creation in the early years of the state’s formation in 1976, the ministry has evolved through reforms, focusing on food production, agro-industrial growth, farmer support, and policy-driven agricultural transformation across the state.
        </p>
      </div>
      <CTASection
        heading="Partner with Us to Transform Agriculture in Imo State."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />    
      <Footer />
    </main>
  );
}
