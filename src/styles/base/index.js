import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: var(--size-base);
    font-family: 'Roboto Slab', sans-serif;
  }

  input {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default Base;
