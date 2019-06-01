import styled from "styled-components";

import StarsSvg from "../../assets/images/stars.svg";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;

  background-size: 300px;
  background-image: url(${StarsSvg});
  background-repeat: repeat;

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: var(--color-primary);

  h1 {
    font-size: var(--size-very-big);
    font-weight: 400;
    opacity: 0.8;
  }

  h3 {
    font-size: var(--size-medium);
    font-weight: 100;
  }

  p {
    font-size: 10em;
    letter-spacing: 0.5em;
    opacity: 0.06;
    font-weight: bolder;
    position: absolute;
    top: 10px;
    left: 20px;

    @media (max-width: 650px) {
      font-size: 6em;
    }
  }
`;

export const Section = styled.section`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-primary);
`;
