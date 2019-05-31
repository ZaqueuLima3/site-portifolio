import React from "react";

import { Navigation, Container, Ul } from "./styles";

import Logo from "../../objects/Logo";

const NavList = ["Home", "Blog", "Portifolio", "Contato"];

const Nav = () => (
  <Navigation>
    <Container>
      <Logo />
      <Ul>
        {NavList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Ul>
    </Container>
  </Navigation>
);

export default Nav;
