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
      <nav className="w-full flex  grid grid-cols-3  items-center justify-center h-15 shadow shadow-black shadow-md/20 bg-white dark:bg-[#2D2D2D]">
        <div className="flex justify-start pl-5">
          <ThemeButton />
        </div>

        <h1 className="font-alfa dark:text-white">resyin.dev</h1>
        <div className="flex justify-end pr-5 z-50">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes className="text-[#1E1E1E] dark:text-white"/> : <FaBars className="dark:text-white" />}
          </button>
        </div>
      </nav>

      
        <div className={`fixed inset-0 bg-[#BBDC12] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="flex justify-center hover:text-white font-alice py-5"
              >
                <a 
                href={link.href}
                onClick={closeMenu}>
                {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      
    </>
  );
};
