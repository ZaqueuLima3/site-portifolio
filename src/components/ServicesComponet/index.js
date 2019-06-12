import React from "react";

import { Container, Title, Text } from "./styles";

const ServicesComponet = ({ title, text }) => (
  <Container>
    <Title>{title}</Title>
    <Text>{text} </Text>
  </Container>
);

export default ServicesComponet;
