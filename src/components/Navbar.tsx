"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#service" },
  { name: "Project", href: "#project" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-6 bg-transparent">
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-[#6EC024] to-[#E5E800] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
      >
        RESYIN
      </Link>

      <nav className="hidden md:flex items-center gap-20 text-md">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              link.name === "Home"
                ? "text-white font-semibold cursor-default pointer-events-none"
                : "text-neutral-400 hover:text-white transition-colors duration-200"
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};