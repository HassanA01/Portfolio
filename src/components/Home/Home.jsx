import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="flex flex-col h-full justify-center px-8 max-w-[1000px] mx-auto text-cyan-200">
        <p className="text-[#00E469] font-thin">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Aneeq Hassan</h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#56BBCF]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#56BBCF] py-4 max-w-[700px]">
          I'm a full-stack software engineer focused on developing innovative
          solutions to complex problems and building full-stack web
          applications. Currently, I am working on expanding my skillset to the
          cloud and AI.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#00E469] hover:bg-[#00E469] hover:rounded-md hover:duration-300 duration-300">
              View my Work
              <span className="group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
