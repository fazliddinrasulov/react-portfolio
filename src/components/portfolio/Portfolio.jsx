import Wrapper from "./Wrapper";
import { datas } from "../../assets/data";

const Portfolio = () => {
  return (
    <Wrapper>
      <section id="portfolio">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {datas.map((data) => {
            const { id, title, image, github, demo } = data;
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className="btn">
                    Github
                  </a>
                  <a href={demo} target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Portfolio;
