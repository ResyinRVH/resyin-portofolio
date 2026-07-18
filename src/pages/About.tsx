import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile1.png";

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex items-center grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6 pt-20 px-5 gap-5"
      >
        <div className="relative w-35 h-40 col-1 rounded-4xl outline-4 outline-offset-4 outline-[#2D2D2D] bg-[#2D2D2D] dark:outline-white md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4 transition-color duration-500">
          <img
            src={profile}
            alt="Profile"
            className="-translate-y-7 scale-100 w-full rounded-4xl object-cover md:col-start-2 md:col-end-4"
          />
          <div className="absolute bottom-2 right-2">
            <div className="h-10 px-4 flex justify-between items-center rounded-xl border-2 bg-linear-to-r from-[#276F27] via-[#8ECA3C] to-[#BBDC12] text-white text-left text-xs">
              <div className="pr-4">
                <h5 className="font-alice">My Project</h5>
                <h5 className="font-alfa">3</h5>
              </div>
              <button>
                <FaArrowRight className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-2 text-justify dark:text-white md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5 transition-text duration-500">
          <h3 className="font-alfa text-md pb-5">Resyin V.H.</h3>
          <p className="font-alice text-sm">
            I help companies turn ideas into functional and visually appealing
            websites using modern frontend technologies.
          </p>
        </div>
      </section>
    </>
  );
};
