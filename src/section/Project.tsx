import "../App.css";
import { CardProject } from "../components/CardProject";
import restaurant from "../assets/restaurant.jpeg";

export const Project = () => {
  const ProjectItems = [
    {
      projectName: "Restaurant Landing Page",
      technical: "React, Typescript, Tailwind CSS",
      image: restaurant,
      altText: "restaurant",
    },
    {
      projectName: "Restaurant Landing Page",
      technical: "React, Typescript, Tailwind CSS",
      image: restaurant,
      altText: "restaurant",
    },
  ];
  return (
    <>
      <section id="project" className="pt-20 ">
        <div className=" text-left pt-10 bg-[#F3F3F3]">
          <div className="px-5">
            <h1 className="font-alfa">My Project</h1>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
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
