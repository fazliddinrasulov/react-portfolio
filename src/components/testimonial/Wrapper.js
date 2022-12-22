import styled from "styled-components";

const Wrapper = styled.aside`
  .container.testimonials__container {
    position: relative;
    width: 60%;
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      width: var(--container-width-sm);
    }
  }
  section {
    overflow: hidden;
    height: 60vh;
  }
  .client__avatar {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    margin: 0 auto 1rem;
    border-radius: 50%;
    border: 0.4rem solid var(--color-primary-variant);
  }
  .client__avatar img {
    max-width: 100%;
    object-fit: cover;
  }
  .testimonial {
    position: absolute;
    left: 0;
    width: 100%;
    user-select: none;
    transition: var(--transition);
    opacity: 0;
  }
  .testimonial > div {
    position: relative;
    width: 100%;
    margin: auto;
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
  }
  .client__review {
    font-size: 1rem;
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
    @media (max-width: 600px) {
      width: var(--container-width-sm);
    }
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--color-primary);
    color: var(--color-bg);
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev {
    left: 2%;
  }
  .next {
    right: 2%;
  }
`;
export default Wrapper;
