import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: rgb(19, 39, 63);
  border-radius: 5px;
  padding: 0.8rem 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  transition: 200ms;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;

export const StyledButtonWhite = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 0.8rem 2rem;
  color: #13273f;
  font-size: 15px;
  font-weight: 600;
  transition: 200ms;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
interface ButtonProps {
  white: boolean;
}
const ButtonDefault: React.FunctionComponent<ButtonProps> = ({
  children,
  white,
}) =>
  white ? (
    <StyledButtonWhite>{children}</StyledButtonWhite>
  ) : (
    <StyledButton>{children}</StyledButton>
  );

export default ButtonDefault;
