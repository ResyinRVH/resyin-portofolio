import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export interface ServiceItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
}

interface ServiceCardProps {
  item: ServiceItem;
  isActive: boolean;
  onToggle: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  isActive,
  onToggle,
}) => {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer transition-all duration-300 rounded-3xl p-6 sm:p-8 relative ${
        isActive
          ? "bg-[#72cf24] text-black shadow-[0_10px_30px_rgba(114,207,36,0.15)]"
          : "bg-[#18191c] text-white hover:bg-[#202226] border border-white/5"
      }`}
      style={{
        clipPath: isActive
          ? "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))"
          : "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 sm:gap-10">
          <span
            className={`text-sm sm:text-base font-mono font-medium ${
              isActive ? "text-black/70" : "text-neutral-500"
            }`}
          >
            {item.id}
          </span>
          <h3
            className={`text-lg sm:text-2xl font-bold tracking-tight ${
              isActive ? "text-black" : "text-white"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <Button
          variant="icon"
          aria-label="Toggle Service"
          className={`w-9 h-9 sm:w-11 sm:h-11 ${
            isActive
              ? "bg-black text-[#72cf24] rotate-45"
              : "bg-[#72cf24] text-black"
          }`}
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </Button>
      </div>

      {isActive && (
        <div className="pt-6 mt-6 border-t border-black/10">
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, tIdx) => (
              <Tag key={tIdx} label={tag} />
            ))}
          </div>
          <p className="text-sm sm:text-base text-black/85 leading-relaxed max-w-3xl">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
};