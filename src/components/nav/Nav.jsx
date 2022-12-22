import Wrapper from "./Wrapper";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareAdd } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Wrapper>
      <nav>
        <a
          href="/#"
          className={activeNav === "#" ? "active" : ""}
          onClick={() => setActiveNav("#")}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          className={activeNav === "about" ? "active" : ""}
          onClick={() => setActiveNav("about")}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          className={activeNav === "experience" ? "active" : ""}
          onClick={() => setActiveNav("experience")}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          className={activeNav === "services" ? "active" : ""}
          onClick={() => setActiveNav("services")}
        >
          <RiServiceFill />
        </a>
        <a
          href="#contact"
          className={activeNav === "contact" ? "active" : ""}
          onClick={() => setActiveNav("contact")}
        >
          <BiMessageSquareAdd />
        </a>
      </nav>
    </Wrapper>
  );
};

export default Nav;
