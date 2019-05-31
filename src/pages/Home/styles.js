import styled from "styled-components";

import StarsSvg from "../../assets/images/stars.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  height: 100vh;
`;

export const Banner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;

  background-size: 300px;
  background-image: url(${StarsSvg});
  background-repeat: repeat;
`;

export const TextWrapper = styled.div`
  width: 100%;
  color: var(--color-white);
  position: relative;
  left: -50px;

  h1 {
    font-size: var(--size-very-big);
    font-weight: 200;
  }

  h3 {
    font-size: var(--size-medium);
    font-weight: 100;
  }

  p {
    font-size: 10em;
    letter-spacing: 0.5em;
    opacity: 0.04;
    font-weight: bolder;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 600px;
    width: 80%;

    background-color: var(--color-second);
    border-radius: var(--radius-big);
  }
`;
