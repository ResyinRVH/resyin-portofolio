"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#service" },
  { name: "Project", href: "#project" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveSection(currentId);
            const newHash = currentId === "home" ? " " : `#${currentId}`;
            if (window.location.hash !== `#${currentId}`) {
              window.history.replaceState(
                null,
                "",
                currentId === "home" ? window.location.pathname : newHash
              );
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      window.history.replaceState(
        null,
        "",
        targetId === "home" ? window.location.pathname : href
      );
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-40 transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? "bg-[#0c0d0f]/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-5 sm:py-6"
          }`}
      >
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[#6EC024] to-[#E5E800] bg-clip-text text-transparent hover:opacity-90 transition-opacity select-none"
        >
          RESYIN
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-15 text-md font-medium">
          {navLinks.map((link) => {
            const isHome = link.name === "Home";
            const isActive = activeSection === link.href.replace("#", "");

            const linkStyle = isHome
              ? "text-white font-semibold cursor-pointer"
              : isActive
                ? "text-white font-semibold cursor-pointer"
                : "text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer";

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={linkStyle}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#E5E800]" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#0c0d0f]/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-center px-8 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-7">
          {navLinks.map((link) => {
            const isHome = link.name === "Home";
            const isActive = activeSection === link.href.replace("#", "");

            const linkStyle = isHome
              ? "text-white font-bold text-2xl"
              : isActive
                ? "text-[#72cf24] font-bold text-2xl"
                : "text-neutral-400 hover:text-white text-2xl font-medium transition-colors";

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${linkStyle} py-2 transition-transform duration-200 active:scale-95`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};