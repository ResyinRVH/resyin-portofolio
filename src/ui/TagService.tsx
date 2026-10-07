import React from "react";

interface TagProps {
  label: string;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, className = "" }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold bg-black/10 text-black border border-black/10 transition-colors ${className}`}
    >
      {label}
    </span>
  );
};