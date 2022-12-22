import styled from "styled-components";

const Wrapper = styled.aside`
  section {
    height: auto;
    margin-top: 2rem;
    @media (max-width: 1024px) {
      margin-top: 36rem;
    }
  }
  .services__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
  .service {
    background: var(--color-bg-variant);
    border-radius: 0 0 2rem 2rem;
    border: 1px solid var(--color-primary);
    height: auto;
  }
  .service:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
    transition: var(--transition);
  }
  .service__head {
    background: var(--color-primary);
    padding: 2rem;
    box-shadow: var(--shadow-1);
    border-radius: 0 0 2rem 2rem;
  }
  .service__head h3 {
    color: var(--color-bg);
    font-size: 1rem;
    text-align: center;
  }
  .service__list {
    padding: 2rem;
  }
  .service__list li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }
  .service__list-icon {
    color: var(--color-primary);
    margin-top: 5px;
  }
  .service__list p {
    font-size: 0.9rem;
  }
`;
export default Wrapper;
