import React from "react";

import { Container, Banner, TextWrapper, Section } from "./styles";

import Nav from "../../components/Nav";

import Moon from "../../objects/Moon";

const Home = () => (
  <>
    <Container>
      <Nav />
      <Banner>
        <Moon />
        <TextWrapper>
          <h1>Full-Stack Developer</h1>
          <h3>Zaqueu Lima</h3>
          <p>dream builder</p>
        </TextWrapper>
      </Banner>
    </Container>
    <Section>
      <div />
    </Section>
  </>
);

export default Home;
