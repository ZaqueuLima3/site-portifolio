import styled from "styled-components";

export const Container = styled.div`
  height: 370px;
  width: 450px;
  padding: var(--spacing-big);
  background-color: rgba(0, 0, 0, 0.4);
  margin-left: var(--spacing-medium);
  transition: background-color 0.8s, box-shadow 0.8s, transform 2s;

  &:hover {
    background-color: var(--color-negative-light);
    cursor: pointer;
    box-shadow: 3px 3px 12px 2px rgba(0, 0, 0, 0.75);
  }
`;

export const Title = styled.h2`
  font-size: var(--size-medium);
  padding-bottom: var(--spacing-medium);
`;

export const Text = styled.h2`
  color: #a4a4a4;
  font-weight: 100;
`;
