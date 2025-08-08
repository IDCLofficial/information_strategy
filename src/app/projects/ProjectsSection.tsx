"use client"

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import Link from "next/link";


const PROJECTS_PER_PAGE = 5;

export default function ProjectsSection() {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const start = page * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;
    const currentProjects = projects.slice(start, end);

    if(currentProjects.length === 0) {
        return (
            <div className="w-full flex flex-col gap-2 items center justify-center p-4 border-1 border-gray-200 text-center">
                <p>No information at the moment. <br/> Come back later</p>
                <Link href="/" className="bg-primary-green p-2 rounded text-white">Back to homepage</Link>
            </div>
        )
    }

    return (
        <section className="w-full py-10 md:py-16 bg-white flex flex-col items-center gap-8 md:gap-22 px-4 md:px-8">
            {currentProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    className="px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </section>
    );
}