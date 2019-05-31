import styled from "styled-components";

const FormBtn = styled.button.attrs({
  type: "submit"
})`
  width: 140px;
  height: 40px;
  box-sizing: border-box;

  background-color: var(--color-white);
  border-radius: var(--radius-small);
  color: var(--color-primary);
  box-shadow: 0px 0px 0px var(--color-base);

  font-weight: bold;
  font-size: var(--size-small);

  will-change: transform, width;
  transition: transform 100ms linear, box-shadow 100ms linear;

  cursor: pointer;

  &:focus,
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px var(--color-base);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export default FormBtn;
