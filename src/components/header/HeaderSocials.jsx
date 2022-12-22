import Wrapper from "./Wrapper";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <Wrapper>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/fazliddin-rasulov/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/rasulovfazliddin/" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/fazliddinrasulov1/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://t.me/fazliddinrasulov/" target="_blank">
          <BsTelegram />
        </a>
      </div>
    </Wrapper>
  );
};

export default HeaderSocials;
