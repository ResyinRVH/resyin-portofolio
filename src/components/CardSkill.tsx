import "../App.css";
import type { CardIconProps } from "../types/TypeIcon";

export const CardSkill = ({icon:Icon, color}: CardIconProps) => {
  return (
    <>
      <section className="py-2 px-2 flex justify-center items-center rounded-md outline-2 outline-offset-2 outline-white cols-start-1 cols-end-3 bg-white text-[#E65100] dark:bg-[#2D2D2D] transition-colors duration-500">
        <Icon className={`w-full h-full ${color}`} />
      </section>
    </>
  );
};
