import "../App.css";
import type { CardSkillProps } from "../types/TypeSkill";

export const CardSkill = ({icon:Icon, color}: CardSkillProps) => {
  return (
    <>
      <div className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white text-[#E65100] dark:bg-[#2D2D2D]">
        <Icon className={`w-full h-full ${color}`} />
      </div>
    </>
  );
};
