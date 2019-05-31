import React from "react";

import { Navigation, Container, Ul } from "./styles";

import Logo from "../../objects/Logo";

const Nav = () => (
  <Navigation>
    <Container>
      <Logo />
      <Ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Portifolio</li>
        <li>Contato</li>
      </Ul>
    </Container>
  </Navigation>
);

export default Nav;
