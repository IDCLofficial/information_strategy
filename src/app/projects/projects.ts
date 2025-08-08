import { getProjectsData } from '@/app/data/resourceData';

interface project {
  title: string;
  image: string;
  status: string;
  description: string;
}

const projectsData = getProjectsData();

// Create project objects from resource.json data
export const projects:project[] = projectsData?.map((project: any) => ({
  title: project.name,
  image: project.imgSrc,
  status: "ongoing",
  description: project.description
})) || [];

// Fallback projects if resource.json data is not available
if (projects.length === 0) {
  projects.push(
    {
      title: "Digital Training for Journalists",
      image: "/images/no_image.jpg",
      status: "completed",
      description: "Organized workshops under the theme 'Upgrading Strategic Communication Competence in the Digital Era'. Designed to provide media professionals with necessary skills in digital tools and ICT for more accurate, modern reporting. Commissioner Declan Emelumba represented the government at these events."
    },
    {
      title: "Let's Talk TV Media Platform",
      image: "/images/no_image.jpg",
      status: "ongoing",
      description: "A television and online engagement platform based within the Imo Digital City. Used for talk shows, interviews, and public consultations, fostering direct connection between government and citizens."
    }
  );
}
