import Wrapper from "./Wrapper";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { testimonials } from "../../assets/data";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index > testimonials.length - 1) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(testimonials.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <Wrapper>
      <section id="testimonials">
        <h5>Reviev from clients</h5>
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
          {testimonials.map((person, i) => {
            const { id, avatar, name, review } = person;
            let position = "nextSlide";
            if (i === index) {
              position = "activeSlide";
            }
            if (
              i === index - 1 ||
              (index === 0 && i === testimonials.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={`testimonial ${position}`}>
                <div>
                  <div className="client__avatar">
                    <img src={avatar} alt="Ernest Achiever" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                  <button
                    className="prev"
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    className="next"
                    onClick={() => {
                      setIndex(index + 1);
                    }}
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Testimonial;
