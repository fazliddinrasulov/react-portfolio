import CV from "../../assets/cv.pdf";
import Wrapper from "./Wrapper";

const CTA = () => {
  return (
    <Wrapper>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </Wrapper>
  );
};

export default CTA;
