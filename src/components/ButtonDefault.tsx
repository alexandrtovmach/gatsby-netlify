import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgb(19, 39, 63);
  border-radius: 5px;
  width: 204px;
  height: 48px;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;
interface ButtonProps {
  text: string;
}
const ButtonDefault: React.FunctionComponent<ButtonProps> = ({ text }) => (
  <Button>{text}</Button>
);

export default ButtonDefault;
