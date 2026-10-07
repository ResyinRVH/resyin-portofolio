import React from "react";
import { Mail } from "lucide-react";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiInstagramLine,
    RiTiktokLine,
} from "react-icons/ri";

const socialLinks = [
    {
        name: "GitHub",
        icon: RiGithubLine,
        href: "https://github.com/ResyinRVH",
    },
    {
        name: "LinkedIn",
        icon: RiLinkedinLine,
        href: "https://www.linkedin.com/in/resyin-virzasa-hendriyanti",
    },
    {
        name: "TikTok",
        icon: RiTiktokLine,
        href: "https://tiktok.com/@resyinrvh",
    },
    {
        name: "Instagram",
        icon: RiInstagramLine,
        href: "https://instagram.com/resyin053",
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:resyin9b@gmail.com",
    },
];

interface SocialLinksProps {
    className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
    return (
        <div className={`flex items-center justify-center gap-3 sm:gap-4 flex-wrap ${className}`}>
            {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#15161a] border border-white/10 text-neutral-300 hover:text-black hover:bg-[#E5E800] hover:border-[#E5E800] hover:shadow-[0_0_20px_rgba(229,232,0,0.4)] hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                );
            })}
        </div>
    );
};