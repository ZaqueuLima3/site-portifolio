import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: var(--color-primary);
`;

export const Container = styled.div`
  height: 60px;
  line-height: 60px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  color: var(--color-white);

  li {
    font-size: var(--size-medium);
    display: inline-block;
    margin-left: 20px;

    &:first-child {
      font-size: 222;
      color: var(--color-second);
    }

    &:hover {
      cursor: pointer;

      color: var(--color-second);
    }
  }
`;
