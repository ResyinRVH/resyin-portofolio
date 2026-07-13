import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";


export const ThemeButton = () => {
  const [lightMode, setLightmode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [lightMode]);

  return (
    <button
      onClick={() => setLightmode(!lightMode)}
      className="rounded-lg transition"
    >
      {lightMode ? <CiLight className="px-1 bg-[#BBDC12] rounded-full text-[#2D2D2D] text-3xl cursor-pointer hover:text-white" /> : <MdOutlineNightlight className="px-1 bg-[#BBDC12] rounded-full text-[#2D2D2D] text-3xl cursor-pointer hover:text-white" />}
    </button>
  );
};
