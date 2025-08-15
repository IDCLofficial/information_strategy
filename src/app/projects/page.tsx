import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";
import { contentfulService } from "../../../lib/contentful";
import { Project } from "../../../lib/types";

export default async function ProjectsPage() {
  const projects = await contentfulService.getProjectsByMinistryId(process.env.NEXT_PUBLIC_CONTENTFUL_MINISTRY_ID || "");
  console.log(projects)
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection projects={projects as unknown as Project[] }/>
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