import { useState } from "react";
import { ThemeButton } from "../components/ThemeButton";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="w-full sticky top-0 z-50 flex grid grid-cols-2 items-center justify-center h-15 shadow shadow-black shadow-md/20 dark:bg-[#2D2D2D] md:grid-cols-2 bg-white transition-colors duration-500">
        <div className="flex justify-start pl-5 md:pr-5">
          <h1 className="font-alfa bg-gradient-to-r from-[#BBDC12] via-[#8ECA3C] to-[#276F27] bg-clip-text text-transparent md:px-10 lg:px-15">resyin.dev</h1>
        </div>

        <div className="hidden md:flex md:justify-end md:px-10 lg:px-15 gap-5 ">
          
          <ul className="hidden md:flex md:items-center md:font-alice md:gap-5 ">
            <li className="hover:bg-gradient-to-r hover:from-[#BBDC12] hover:to-[#8ECA3C] hover:bg-clip-text hover:text-transparent dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#BBDC12] dark:hover:to-[#8ECA3C] dark:hover:bg-clip-text dark:hover:text-transparent">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-[#BBDC12] hover:to-[#8ECA3C] hover:bg-clip-text hover:text-transparent dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#BBDC12] dark:hover:to-[#8ECA3C] dark:hover:bg-clip-text dark:hover:text-transparent">
              <a href="#skill">Skill</a>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-[#BBDC12] hover:to-[#8ECA3C] hover:bg-clip-text hover:text-transparent dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#BBDC12] dark:hover:to-[#8ECA3C] dark:hover:bg-clip-text dark:hover:text-transparent">
              <a href="#project">Project</a>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-[#BBDC12] hover:to-[#8ECA3C] hover:bg-clip-text hover:text-transparent dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#BBDC12] dark:hover:to-[#8ECA3C] dark:hover:bg-clip-text dark:hover:text-transparent">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-gradient-to-r hover:from-[#BBDC12] hover:to-[#8ECA3C] hover:bg-clip-text hover:text-transparent dark:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#BBDC12] dark:hover:to-[#8ECA3C] dark:hover:bg-clip-text dark:hover:text-transparent">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="flex justify-end">
            <ThemeButton />
          </div>
        </div>

        <div className="flex justify-end pr-5 z-50 md:hidden">
          <div className="flex justify-end pr-5">
            <ThemeButton />
          </div>
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? (
              <FaTimes className="text-[#1E1E1E] dark:text-white" />
            ) : (
              <FaBars className="dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#BBDC12] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="flex justify-center hover:text-white font-alice py-5"
            >
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
