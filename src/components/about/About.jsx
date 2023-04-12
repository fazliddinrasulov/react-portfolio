import Wrapper from "./Wrapper";
import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";

const About = () => {
  return (
    <Wrapper>
      <section id="about">
        <h5>get to know </h5>
        <h2>about me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About_Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>clients</h5>
                <small>20+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscNewFolder className="about__icon" />
                <h5>projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
              Front-End and Mobile (React Native) developer with proven experience at
              Indevs in helping company to create and maintain a better code base for
              reusability, integrating with backend or serverless services such as: AWS,
              Firebase. I was responsible CI/CD implementation, unit testing (Jest and
              React Testing), problem solving, fixing bugs and making important decisions,
              refactoring legacy codes, adding new functionalities. Mentoring for junior
              developers in company. I have experience over 2 years in building projects
              from concept to lunch at Indevs.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
