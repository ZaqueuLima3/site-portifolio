import React from "react";

import json from "../../Json/services.json";
import ServicesComponet from "../ServicesComponet";

import { Container, Title, TopHeader, Line, Test, Content } from "./styles";

const Specialties = () => {
  const services = Object.values(json);
  return (
    <Container>
      <Title>Js is everywhere</Title>
      <TopHeader>
        <Line />
        <Test>Service</Test>
      </TopHeader>
      <Content>
        {services.map(service => (
          <ServicesComponet title={service.title} text={service.text} />
        ))}
      </Content>
    </Container>
  );
};

export default Specialties;
