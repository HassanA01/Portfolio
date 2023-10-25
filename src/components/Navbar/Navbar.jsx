import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/logo-dark.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    const icons1 = document.getElementById("icons-animation1");
    const icons2 = document.getElementById("icons-animation2");
    if (!nav) {
      icons1.classList.add("hidden");
      icons2.classList.add("hidden");
    } else {
      icons1.classList.remove("hidden");
      icons2.classList.remove("hidden");
    }
    setNav(!nav);
  };

  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200">
      <div>
        <img
          src={Logo}
          alt="A.H Logo"
          style={{ width: "110px", marginLeft: "-20px" }}
        />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col bg-inherit justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <ul className="fixed bottom-36">
          <li className="flex w-[300px] justify-between items-center">
            <a href="https://www.linkedin.com/in/hassana01/">
              <FaLinkedin color={"rgb(37, 99, 235)"} size={38} />
            </a>
            <a href="https://github.com/HassanA01">
              <FaGithub color={"#00E469"} size={38} />
            </a>
            <a href="mailto:hassan.aneeq01@gmail.com">
              <HiOutlineMail color={"rgb(37, 99, 235)"} size={38} />
            </a>
          </li>
        </ul>
      </ul>

      {/* Social Icons */}

      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-4px] duration-500 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://www.linkedin.com/in/hassana01/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-4px] duration-500 bg-[#00E469]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/HassanA01"
            >
              GitHub <FaGithub color="black" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-4px] duration-500 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="mailto:hassan.aneeq01@gmail.com"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-4px] duration-500 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/Aneeq Hassan.pdf"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
