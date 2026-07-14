import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";


export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(true);

useEffect(() => {
  document.documentElement.classList.toggle("dark", isDark);

  console.log(document.documentElement.className)
}, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded-lg transition"
    >
      {isDark ? <CiLight className="px-1 bg-[#BBDC12] rounded-full text-[#2D2D2D] text-3xl cursor-pointer hover:text-white" /> : <MdOutlineNightlight className="px-1 bg-[#BBDC12] rounded-full text-[#2D2D2D] text-3xl cursor-pointer hover:text-white" />}
    </button>
  );
};
