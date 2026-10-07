import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-l from-white/10 to-transparent px-10 py-25 text-center flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};