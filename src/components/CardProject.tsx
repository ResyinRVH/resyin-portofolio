import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import type { ProjectList } from "../types/ProjectList";

export const CardProject = ({
  projectName,
  technical,
  image,
  altText,
}: ProjectList) => {
  return (
    <>
      <div className="w-full px-4 py-4 border-white border-7 bg-linear-to-b from-[#BBDC12] via-[#8ECA3C] to-[#276F27] rounded-3xl shadow-rb active:shadow-[#8ECA3C] ">

        <div className="bg-white h-55 rounded-2xl ">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover object-top rounded-3xl"
          />
        </div>

        <div className="grid grid-cols-4 bg-white border-2 border-[#8ECA3C] rounded-2xl px-3 py-3 mt-5 text-xs flex items-center dark:bg-[#2D2D2D] dark:border-white ">
          <div className="col-start-1 col-end-4 text-[#2D2D2D]">
            <h3 className="font-alfa dark:text-white">{projectName}</h3>
            <p className="font-alice dark:text-white">{technical}</p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <button 
            onClick={() => window.open("https://wmj-landing-pages.vercel.app/", "_blank")}
            className="w-10 h-10 flex justify-center items-center bg-linear-to-b from-[#BBDC12] via-[#8ECA3C] to-[#276F27] rounded-full cursor-pointer hover:brightness-85 active:brightness-85">
              <FaArrowRight className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
