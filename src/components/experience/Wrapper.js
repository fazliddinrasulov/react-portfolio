import styled from "styled-components";

const Wrapper = styled.aside`
  section {
    margin-top: 2rem;
    @media (max-width: 1024px) {
      margin-top: 25rem;
    }
    @media (max-width: 600px) {
      margin-top: 35rem;
    }
  }
  .experience__container {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 70rem;
  }
  .experience__container > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    @media (max-width: 1024px) {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      width: 100%;
      padding: 2rem;
      margin: 0 auto;
    }
  }
  .experience__container > div:hover {
    background-color: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
    transition: var(--transition);
  }
  .experience__container > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }
  .experience__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
    column-gap: 8rem;
    @media (max-width: 1024px) {
      padding: 1rem;
      grid-template-columns: 1fr 1fr;
      column-gap: 0;
    }
  }

  .experience__details {
    display: flex;
    gap: 1rem;
  }
  .experience__details-icon {
    margin-top: 2px;
    color: var(--color-primary);
  }
  .experience__details > div h4 {
    margin: 0;
  }
`;
export default Wrapper;
