import "../App.css";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer id="contact" className="w-full  relative">
        <div className="w-full h-40 bg-[#F3F3F3]"></div>

        <div className="w-full h-40 pb-5 bg-linear-to-b from-[#BBDC12] via-[#8ECA3C] to-[#276F27]">
          <div className="relative ">
            <div className="w-80 px-5 py-5 bg-white border-4 border-[#8ECA3C] shadow-md/30 rounded-2xl absolute left-1/2 -top-25 -translate-x-1/2 w-80">
              <h3 className="pb-5 font-alfa bg-gradient-to-r from-[#BBDC12] via-[#8ECA3C] to-[#276F27] bg-clip-text text-transparent">
                Available for remote frontend opportunities
              </h3>
              <div className="font-alice text-left text-sm ">
                <p>Whatsapp: +62 856-0756-3796</p>
                <p>Email: resyin9b@gmail.com</p>
                <p>Linkedin: Resyin Virzasa Hendriyanti</p>
                <p>GitHub: github.com/resyin</p>
              </div>
            </div>
          </div>

          <h3 className="flex items-center justify-center gap-2 font-alice text-white pt-30">
            <FaRegCopyright className="text-lg" />
            <span>2026 Resyin</span>
          </h3>
        </div>
      </footer>
    </>
  );
};
