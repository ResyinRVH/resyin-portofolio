import React from "react";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiSolidity,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E44D26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#204CE6]" },
  { name: "JavaScript", icon: BsJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: RiReactjsLine, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: RiNextjsLine, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "text-[#38BDF8]" },
  { name: "Solidity", icon: SiSolidity, color: "text-neutral-200" },
];

interface TagAboutProps {
  className?: string;
}

export const TagAbout: React.FC<TagAboutProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 flex-wrap ${className}`}>
      {techStack.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#141518] text-neutral-200 border border-white/10 hover:border-white/25 hover:bg-[#1c1e24] hover:text-white transition-all duration-300"
          >
            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color} shrink-0`} />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
};