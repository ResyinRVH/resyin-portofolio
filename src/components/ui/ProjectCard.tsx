import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ProjectItem {
    id: string;
    title: string;
    category: "Development" | "UI/UX Design" | "Web3" | "Fullstack";
    image: string;
    link?: string;
    liveUrl?: string;
}

interface ProjectCardProps {
    project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group relative flex flex-col justify-between rounded-3xl bg-[#141518]/80 border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="relative w-full aspect-[1355/605] rounded-2xl overflow-hidden bg-neutral-900 mb-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex items-center justify-between gap-3 px-1.5 pb-1">
                <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                        {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5E800] transition-colors line-clamp-1">
                        {project.title}
                    </h3>
                </div>

                <Button
                    variant="icon"
                    aria-label={`View ${project.title}`}
                    href={project.liveUrl || project.link || "#"}
                    className="w-9 h-9 bg-white text-black group-hover:bg-[#E5E800] group-hover:shadow-[0_0_15px_rgba(229,232,0,0.4)] transition-all duration-300"
                >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Button>
            </div>
        </div>
    );
};