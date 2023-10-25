import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00E469]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] px-4 w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Aneeq, nice to meet you! Feel free to take a look around!{" "}
            </p>
          </div>
          <div>
            <p>
              I'm passionate about building excellent software that improves the
              lives of others around me. As of right now, I am an undergrad
              specializing in Computer Science at University of Toronto, and my
              main interests are full-stack development, AI/ML, and cloud
              computing. If you're interested in a passionate software engineer,
              feel free to contact me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
