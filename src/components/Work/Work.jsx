import React from "react";
import { data } from "./data";

const Work = () => {
  const projects = data;
  return (
    <div name="work" className="bg-[#0a192f] text-gray-300 w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 pt-[100px] flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-b-[#00E469]">
            Work
          </p>
          <p className="py-4">Check out some of my recent projects!</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg rounded-md duration-300 group shadow-[#040c16] group container rounded-mb flex justify-center items-center mx-auto project-container"
            >
              <div className="content-div rounded-md flex justify-center items-center w-full h-full">
                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl flex items-center justify-center text-center font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button className="hover:scale-110 duration-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button className="hover:scale-110 duration-500 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
