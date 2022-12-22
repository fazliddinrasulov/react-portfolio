import styled from "styled-components";

const Wrapper = styled.aside`
  section {
    height: auto;
  }
  .portfolio__container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 2.5rem;
    @media (max-width: 1024px) {
      grid-template-columns: 50% 50%;
      gap: 1.2rem;
    }
    @media (max-width: 600px) {
      grid-template-columns: 100%;
      gap: 1rem;
    }
  }
  .portfolio__item {
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
  }
  .portfolio__item:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
  .portfolio__item-image {
    & img {
      max-width: 100%;
      border-radius: 1.5rem;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }
  .portfolio__item h3 {
    margin: 1.2rem 0 2rem;
  }
  .portfolio__item-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
export default Wrapper;
