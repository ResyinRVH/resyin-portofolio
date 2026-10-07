'use client';

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 px-6 py-2.5 text-sm tracking-wide";

  const variants = {
    primary:
      "bg-[#E5E800] text-black hover:bg-[#85e236] shadow-[0_0_20px_rgba(114,207,36,0.35)] hover:shadow-[0_0_25px_rgba(114,207,36,0.5)] active:scale-95",
    secondary:
      "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 active:scale-95",
    outline:
      "border border-[#72cf24] text-[#72cf24] hover:bg-[#72cf24]/10 active:scale-95",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};