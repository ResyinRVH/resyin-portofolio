import "../App.css";
import type { CardIconProps } from "../types/TypeIcon";

export const SocialMedia = ({ icon: Icon, color }: CardIconProps) => {
  return (
    <>
      <section className="w-10 h-10 px-2 py-2 rounded-xl bg-white border-2 border-[#8ECA3C] shadow-md/10 hover:brightness-85 cursor-pointer dark:bg-[#2D2D2D]">
        <Icon className={`w-full h-full ${color}`} />
      </section>
    </>
  );
};
