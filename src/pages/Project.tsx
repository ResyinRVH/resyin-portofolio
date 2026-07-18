import "../App.css";
import { CardProject } from "../components/CardProject";
import restaurant from "../assets/restaurant.jpeg";
import portofolio from "../assets/portofolio.png";

export const Project = () => {
  const ProjectItems = [
    {
      projectName: "Restaurant Landing Page",
      technical: "React, Typescript, Tailwind CSS",
      image: restaurant,
      altText: "restaurant",
      url:"https://wmj-landing-pages.vercel.app/",
    },
    {
      projectName: "Portofolio Web",
      technical: "React, Typescript, Tailwind CSS",
      image: portofolio,
      altText: "portofolio",
      url:"https://resyindev.vercel.app/",
    },
  ];
  return (
    <>
      <section id="project" className=" ">
        <div className=" text-left pt-10 bg-[#F3F3F3] dark:bg-[#2D2D2D] transition-colors duration-500">
          <div className="px-5 md:px-10 lg:px-15">
            <h1 className="font-alfa dark:text-white transition-text duration-500">My Project</h1>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:pl-5 lg:pl-10 md:pr-5 lg:pr-10">
            {ProjectItems.map((item, idx) => (
              <div key={idx} className="w-80 px-5 py-10 shrink-0 snap-center">
                <CardProject {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
