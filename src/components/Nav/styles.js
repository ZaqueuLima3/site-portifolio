import styled from "styled-components";


export const Container = styled.nav`
  height: 80px;
  width: 100%;
  line-height: 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  background-color: var(--color-primary);
  box-shadow: 3px 2px 10px rgba(20, 20, 20, 0.8);
`;

export const LogoContent = styled.div`
  margin-left: 60px;
`;

export const Ul = styled.ul`
  color: var(--color-white);
  justify-self: flex-end;

  @media (max-width: 650px) {
      display: none;
  }

  li {
    font-size: var(--size-medium);
    display: inline-block;
    margin-left: 20px;

    &:first-child {
      font-size: 222;
      color: var(--color-second);
    }

    &:last-child {
      margin-right: 60px;
    }

    &:hover {
      cursor: pointer;

      color: var(--color-second);
    }
  }
`;
