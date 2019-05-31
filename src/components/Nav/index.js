import React from "react";

import { Container, LogoContent, Ul } from "./styles";

import Logo from "../../objects/Logo";

const NavList = ["Home", "Blog", "Portifolio", "Contato"];

const Nav = () => (
    <Container>
      <LogoContent>
        <Logo />
      </LogoContent>
      <div>
        <Ul>
          {NavList.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </Ul>
      </div>
    </Container>
);

export default Nav;
