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
      <div className="w-full h-95 px-5 py-5  outline-white outline-5 outline-offset-4 bg-linear-to-bl from-[#BBDC12] via-[#8ECA3C] to-[#276F27] rounded-3xl shadow-2xl/30">
        <div className="bg-white h-55 rounded-3xl border-2 border-[#276F27]">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover object-top rounded-3xl"
          />
        </div>

        <div className="grid grid-cols-4 bg-white border-2 border-[#8ECA3C] h-25 rounded-3xl px-3 py-3 mt-5 text-sm flex items-center">
          <div className="col-start-1 col-end-4">
            <h3 className="font-alfa">{projectName}</h3>
            <p className="font-alice">{technical}</p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-linear-to-bl from-[#BBDC12] via-[#8ECA3C] to-[#276F27] rounded-full">
              <FaArrowRight className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
