import "../App.css";
import bgDark from "../assets/Background-Coding.jpg";
import { TypingText } from "../components/TypingText";

export const Hero = () => {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-20  ">
        <div
          className="absolute inset-0 hidden dark:block bg-cover bg-center opacity-5 "
          style={{ backgroundImage: `url(${bgDark})` }}
        />

        <div className="relative z-10 ">
          <h1 className="font-alfa text-5xl dark:text-white">
            <TypingText firstText="Frontend" secondText="Developer" />
          </h1>
          <p className="font-alice text-sm pt-10 px-5 dark:text-white transition-text duration-500">
            Frontend Web Developer focused on building clean, responsive, and
            user-friendly web applications.
          </p>
          <div className="grid grid-cols-4 md:grid md:grid-cols-6 lg:grid lg:grid-cols-10 gap-5 px-5  pt-10 flex items-center font-alice">
            <a
              href="#project"
              className="text-sm py-2 px-5 bg-linear-to-r from-[#BBDC12] via-[#8ECA3C] to-[#276F27] rounded-md col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-4 lg:col-end-6 shadow-md/20 hover:brightness-125 active:brightness-85"
            >
              View My Project
            </a>
            <a
              href="#contact"
              className="text-sm py-2 border-2 border-[#2D2D2D] hover:border-[#BBDC12] rounded-md col-start-3 col-end-5 md:col-start-4 md:col-end-6 lg:col-start-6 lg:col-end-8 hover:brightness-110 active:border-[#BBDC12] dark:border-white dark:text-white dark:hover:border-[#BBDC12] transiton-colors duration-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
