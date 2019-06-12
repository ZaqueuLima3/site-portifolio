import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 200px;
    width: 200px; 
    float: right;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
