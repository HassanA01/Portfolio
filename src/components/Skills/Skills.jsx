import React from "react";
import Python from "../../assets/python.png";
import react from "../../assets/React-icon.svg.png";
import Java from "../../assets/java-icon.svg";
import Node from "../../assets/node.png";
import HTML from "../../assets/html-css.png";
import C from "../../assets/C_Programming_Language.svg.png";
import JavaScript from "../../assets/js.png";
import GitHub from "../../assets/github.png";
import Angular from "../../assets/angular.png";
import Jira from "../../assets/jira.svg";
import GoLang from "../../assets/golang.png";
import AWS from "../../assets/aws.png";
import Firebase from "../../assets/firebase.svg";
import MongoDB from "../../assets/mongodb.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold border-b-4 inline border-b-[#00E469]">
            Skills
          </p>
          <p className="py-4">
            These are some technologies and tools I have worked with!
          </p>
        </div>
        {/* Container for icons */}
        <div
          id="icons-animation1"
          className="pt-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
            <li>
              <img
                src={Python}
                alt="Python"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={react}
                alt="React"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Java}
                alt="Java"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Node}
                alt="Node.js"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={HTML}
                alt="HTML/CSS"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={C}
                alt="C"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={JavaScript}
                alt="JavaScript"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <img
                src={Python}
                alt="Python"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={react}
                alt="React"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Java}
                alt="Java"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Node}
                alt="Node.js"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={HTML}
                alt="HTML/CSS"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={C}
                alt="C"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={JavaScript}
                alt="JavaScript"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
          </ul>
        </div>
        <div
          id="icons-animation2"
          className="py-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex animate-infinite-scroll-reverse items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
            <li>
              <img
                src={GitHub}
                alt="GitHub"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Angular}
                alt="Angular"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Firebase}
                alt="Firebase"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Jira}
                alt="Jira"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={GoLang}
                alt="GoLang"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={AWS}
                alt="AWS"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={MongoDB}
                alt="MongoDB"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
          </ul>
          <ul
            className="py-4 flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse"
            aria-hidden="true"
          >
            <li>
              <img
                src={GitHub}
                alt="GitHub"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Angular}
                alt="Angular"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Firebase}
                alt="Firebase"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={Jira}
                alt="Jira"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={GoLang}
                alt="GoLang"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={AWS}
                alt="AWS"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
            <li>
              <img
                src={MongoDB}
                alt="MongoDB"
                className="w-24 hover:scale-110 duration-500"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
