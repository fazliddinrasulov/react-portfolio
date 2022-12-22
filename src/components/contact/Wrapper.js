import styled from "styled-components";

const Wrapper = styled.aside`
  section {
    height: auto;
  }
  h5 {
    text-transform: lowercase;
  }
  .container.contact__container {
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (max-width: 600px) {
      width: var(--container-width-sm);
    }
  }
  .contact__options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .contact__option {
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);
  }
  .contact__option:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
  .contact__option-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .contact__option a {
    display: inline-block;
    font-size: 0.8rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }
`;
export default Wrapper;
