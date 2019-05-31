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
          <h1>Lorem Ipsum is simply dummy text</h1>
          <h3>Lorem Ipsum is simply dummy text</h3>
          <p>Lorem Ipsum</p>
        </TextWrapper>
      </Banner>
    </Container>
    <Section>
      <div />
    </Section>
  </>
);

export default Home;
