import Wrapper from "./Wrapper";
import CTA from "./CTA";
import ME from "../../assets/images/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <Wrapper>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Rasulov Fazliddin</h1>
          <h5 className="text-light">
            front end and mobile (reactNative) developer
          </h5>
          <CTA />
          <HeaderSocials />
          <a href="/#" className="scroll__down">
            Scroll Down
          </a>
          <img src={ME} alt="me" className="me" />
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
