import "../App.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { CardSkill } from "../components/CardSkill";

export const Skill = () => {
  return (
    <>
      <section id="skill" className="pt-20 px-5 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6">
        <div className="w-full px-8 py-8 bg-linear-to-r from-[#276F27] via-[#8ECA3C] to-[#BBDC12] shadow-xl/10 rounded-4xl text-left dark:bg-linear-to-r dark:from-[#1E1E1E]/30 dark:via-[#1E1E1E]/10 dark:to-[#1E1E1E]/0 md:col-span-2 md:col-end-4 lg:col-end-5 transition-colors duration-500 ">
          <h3 className="font-alfa pb-5 text-white">Hard Skill</h3>
          <div className="grid grid-cols-5 gap-4 font-alice pb-5">
            <CardSkill icon={FaHtml5} color="text-[#E65100]" />
            <CardSkill icon={FaCss3Alt} color="text-[#0277BD]" />
            <CardSkill icon={BsJavascript} color="text-[#F0DB4F]" />
            <CardSkill icon={FaReact} color="text-[#00BCD4]" />
          </div>
          <div className="grid grid-cols-5 gap-4 font-alice pb-5">
            <CardSkill icon={BsTypescript} color="text-[#007ACC]" />
            <CardSkill icon={RiTailwindCssFill} color="text-[#0277BD]" />
          </div>
          <h3 className="font-alfa pb-5 text-white">Soft Skill</h3>
          <ul className="font-alice list-disc px-5 text-sm text-white">
            <li>Problem Solving</li>
            <li>Clear Communication</li>
            <li>Self-Learner</li>
            <li>Remote Collaboration</li>
          </ul>
        </div>
      </section>
    </>
  );
};
