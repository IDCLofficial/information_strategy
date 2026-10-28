import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";
import { contentfulService } from "../../../lib/contentful";
import { Project } from "../../../lib/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Projects and programmes of the Ministry of Information, Public Orientation and Strategy, Imo State Government.",
  path: "/projects",
});


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