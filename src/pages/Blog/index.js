import React from "react";

import { Container, Banner, TextWrapper, Section } from "./styles";

import Nav from "../../components/Nav";

import Moon from "../../objects/Moon";

const Home = () => (
  <>
    <Container>
      <Nav />
      <Banner>
        <TextWrapper>
          <h1>blog em desenvolvimento</h1>
        </TextWrapper>
      </Banner>
    </Container>
  </>
);

export default Home;
