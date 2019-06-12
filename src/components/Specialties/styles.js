import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-big);

  background-color: var(--color-primary);

  color: var(--color-white);
`;

export const Title = styled.h2`
  margin: var(--spacing-big);
  font-size: var(--size-big);
`;

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Test = styled.h2`
  font-weight: 100;
  opacity: 0.75;
`;

export const Line = styled.div`
  opacity: 0.75;
  border-bottom: 1px solid #ffffff;
  margin-right: 40px;
  width: 10vw;
  right: calc(100% + 3rem);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--spacing-big);
`;
