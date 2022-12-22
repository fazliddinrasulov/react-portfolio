import styled from "styled-components";

const Wrapper = styled.aside`
  header {
    height: 100vh;
    padding-top: 5rem;
    overflow: hidden;
    @media (max-width: 1024px) {
      height: 100vh;
      padding-top: 4rem;
    }
    @media (max-width: 600px) {
      height: 100vh;
      padding-top: 3rem;
    }
  }
  .header__container {
    text-align: center;
    height: 100%;
    position: relative;
    .cta {
      margin-top: 2.5rem;
      display: flex;
      gap: 1.2rem;
      justify-content: center;
    }
    .header__socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      position: absolute;
      left: 0;
      bottom: 3rem;
      @media (max-width: 600px) {
        display: none;
      }
    }
    .header__socials::after {
      content: "";
      width: 1px;
      height: 2rem;
      background-color: var(--color-primary);
    }
    .me {
      background: linear-gradient(var(--color-primary), transparent);
      border-radius: 16rem 16rem 0 0;
      position: absolute;
      width: 23rem;
      height: 25rem;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 3.5rem;
      bottom: 2.1rem;
      @media (max-width: 1024px) {
        top: 18rem;
      }
      @media (max-width: 300px) {
        width: 15rem;
        height: 20rem;
      }
    }
    .scroll__down {
      position: absolute;
      right: -2.3rem;
      bottom: 5rem;
      transform: rotate(90deg);
      font-weight: 300;
      font-size: 0.9rem;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;
export default Wrapper;
