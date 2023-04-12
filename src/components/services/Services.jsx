import Wrapper from "./Wrapper";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <Wrapper>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>responsibilities</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Indev (2+ years)</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Creating and Maintaining batter codebase </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Integration with backend and serverless services (AWS Firebase)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Continious Integration and Continious Deployment (CI/CD implementations
                  )
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Unit testing (React testing and Jest)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Problem solving, Fixing bugs and Making important decisions</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Refactoring legacy codes and adding new functionality</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mentoring for junior developers</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default Services;
