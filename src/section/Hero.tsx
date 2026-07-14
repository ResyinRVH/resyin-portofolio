import "../App.css";

export const Hero = () => {
  return (
    <>
      <section id="home" className="pt-20 ">
        <h1 className="font-alfa text-5xl">
          Frontend <br></br>Developer
        </h1>
        <p className="font-alice text-sm pt-10 px-5 ">
          Frontend Web Developer focused on building clean, responsive, and
          user-friendly web applications.
        </p>
        <div className="grid grid-cols-4 gap-5 px-5  pt-10 flex items-center font-alice">
          <a
            href="#project"
            className="text-sm py-2 px-5 bg-linear-to-r from-[#BBDC12] via-[#8ECA3C] to-[#276F27] hover:text-white rounded-md col-start-1 col-end-3 shadow-md/20"
          >
            View My Project
          </a>
          <a
            href="#project"
            className="text-sm py-2 border-2 border-[#2D2D2D] hover:border-[#BBDC12] rounded-md col-start-3 col-end-5"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
};
