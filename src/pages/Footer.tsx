import "../App.css";
import { FaRegCopyright } from "react-icons/fa";
import { SocialMedia } from "../components/SocialMedia";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer id="contact" className="w-full relative">
        <div className="w-full h-30 bg-[#F3F3F3] dark:bg-[#2D2D2D] transition-color duration-500"></div>

        <div className="w-full h-40 pb-5 bg-linear-to-b from-[#BBDC12] via-[#8ECA3C] to-[#276F27]">
          <div className="relative ">
            <div className="w-80 md:w-150 px-5 py-5 bg-white border-4 border-[#8ECA3C] shadow-md/30 rounded-2xl absolute left-1/2 -top-15 -translate-x-1/2 w-80 dark:bg-[#2D2D2D] dark:border-white transition-color duration-500">
              <h3 className="pb-5 font-alfa bg-gradient-to-r from-[#BBDC12] via-[#8ECA3C] to-[#276F27] bg-clip-text text-transparent dark:text-white transition-text duration-500">
                Available for remote frontend opportunities
              </h3>
              <div className="flex justify-center gap-2 transition-colors duration-500">
                <button
                  onClick={() =>
                    window.open("https://wa.me/6282229535137", "_blank")
                  }
                >
                  <SocialMedia
                    icon={FaWhatsapp}
                    color="text-[#276F27] text-md dark:text-white "
                  />
                </button>
                <button
                  onClick={() => {
                    window.location.href =
                      "mailto:resyin9b@gmail.com";
                  }}
                >
                  <SocialMedia
                    icon={SiGmail}
                    color="text-[#276F27] text-md dark:text-white"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://linkedin.com/in/resyin-virzasa-hendriyanti", "_blank")
                  }
                >
                  <SocialMedia
                    icon={FaLinkedin}
                    color="text-[#276F27] text-md dark:text-white"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://github.com/ResyinRVH", "_blank")
                  }
                >
                  <SocialMedia
                    icon={FaGithub}
                    color="text-[#276F27] text-md dark:text-white"
                  />
                </button>
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
