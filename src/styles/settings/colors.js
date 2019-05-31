import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-negative-light: rgba(0, 0, 0, 0.15);
    --color-base: #3A4042;
    --color-white: #FFF;
    --color-primary: #1B1D2A;
    --color-second: #F1B532;
    --color-third: #EAE6DA;
  }
`;

export default Colors;
