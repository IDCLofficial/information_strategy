import Image from "next/image";
import { Project } from "../../../lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (  
    <section className="w-full py-10 md:py-16 bg-white flex flex-col md:flex-row md:items-center gap-8 md:gap-22 px-4 md:px-20">
      <div className="w-full relative rounded-lg overflow-hidden md:hidden"> 
        {project.fields.projectImage?.fields.file.url && (
          <Image src={`https:${project.fields.projectImage.fields.file.url}`} alt={project.fields.projectTitle} width={500} height={500} className="object-cover w-full h-full" />
        )}
      </div>
      <div className="md:w-[60%] md:flex-1 flex flex-col gap-4 md:gap-2">
        <h2 className="text-xl md:text-3xl lg:text-[43px] font-medium">{project.fields.projectTitle}</h2>
        <p className="text-dark-primary-body text-base md:text-[1rem] leading-relaxed">
          {project.fields.projectDescription}
        </p>
        {/* <AppLink href="/projects/skillup" variant="primary" label="Meet Our Talents" className="w-max md:w-max" /> */}
        {/* <div className="w-full flex flex-row gap-4 md:gap-10 justify-between mt-4 divide-x md:divide-y-0 divide-gray-500">
          <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-0">
            <span className="text-base md:text-[18px] font-bold">100,000</span>
            <span className="text-gray-500 text-xs md:text-sm">youths targeted</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-0">
            <span className="text-base md:text-[18px] font-bold">50+</span>
            <span className="text-gray-500 text-xs md:text-sm">training centers nationwide</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-0">
            <span className="text-base md:text-[18px] font-bold">200+</span>
            <span className="text-gray-500 text-xs md:text-sm">certified instructors</span>
          </div>
        </div> */}
        <p className="text-base text-slate-500">{project.fields.startDate} / {project.fields.proposedEndDate}</p>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-2 items-center justify-start">
          {project.fields.partners && project.fields.partners.map((partner) => {
            const url = partner.fields.file?.url ? `https:${partner.fields.file.url}` : undefined;
            const alt = partner.fields.title || 'partner logo';
            return url ? (
              <Image key={partner.sys.id} src={url} alt={alt} width={70} height={70} className="rounded" />
            ) : null;
          })}
        </div>
      </div>
      <div className="w-full md:w-[40%] flex justify-center mt-6 md:mt-0">
        <div className="w-full relative h-[350px] rounded-lg overflow-hidden max-md:hidden">
          {project.fields.projectImage?.fields.file.url && (
            <Image src={`https:${project.fields.projectImage.fields.file.url}`} alt={project.fields.projectTitle} width={500} height={500} className="object-contain w-full h-full" />
          )}
        </div>
      </div>
    </section>
  );
}