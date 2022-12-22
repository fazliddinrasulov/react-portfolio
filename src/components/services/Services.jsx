import Wrapper from "./Wrapper";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <Wrapper>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Front End Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>HTML5, Css, scss, JavaScript </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Tailwind, MaterialUI, RestAPI, axios, GraphQL</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Object-Oriented Programming (OOP)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>TypeScript, React, Next.js, React Testing, Jest</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Redux, Redux-Toolkit, Git</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>CI/CD implementation, problem solving</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Mobile React Native Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>HTML5, Css, scss, JavaScript </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>React Native, Redux, TypeScript</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>RestAPI, axios, GraphQL, Animated API, styled components </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>better code base for reusability</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Debugging</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default Services;
