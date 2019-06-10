import React from "react";

import { Container, Banner, TextWrapper, Section } from "./styles";

import Nav from "../../components/Nav";
import Specialties from "../../components/Specialties";
import Technology from "../../components/Technology";
import Footer from "../../components/Footer";

import Moon from "../../objects/Moon";

const Home = () => (
  <>
    <Container>
      <Nav />
      <Banner>
        <Moon />
        <TextWrapper>
          <h1>Web Developer</h1>
          <h3>Zaqueu Lima</h3>
          <p>dream builder</p>
        </TextWrapper>
      </Banner>
    </Container>
    <Specialties />
    <Technology />
    <Footer />
  </>
);

export default Home;
