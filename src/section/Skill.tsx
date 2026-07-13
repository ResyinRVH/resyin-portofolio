import "../App.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

export const Skill = () => {
  return (
    <>
      <section id="skill" className="pt-20 px-5">
        <div className="w-full h-85 px-8 py-8 bg-linear-to-r from-[#276F27] via-[#8ECA3C] to-[#BBDC12] shadow-xl/10 rounded-4xl text-left">
          <h3 className="font-alfa pb-5 text-white ">Hard Skill</h3>
          <div className="grid grid-cols-5 gap-4 font-alice pb-5">
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <FaHtml5 className="w-full h-full text-[#E65100]"/>
            </div>
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <FaCss3Alt className="w-full h-full text-[#0277BD]"/>
            </div>
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <BsJavascript className="w-full h-full text-[#F0DB4F]"/>
            </div>
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <FaReact className="w-full h-full text-[#00BCD4]"/>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 font-alice pb-5">
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <BsTypescript className="w-full h-full text-[#007ACC]"/>
            </div>
            <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white">
            <RiTailwindCssFill className="w-full h-full text-[#0277BD]"/>
            </div>            
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
