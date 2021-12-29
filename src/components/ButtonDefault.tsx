import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: rgb(19, 39, 63);
  border-radius: 5px;
  padding: ${(props) =>
    props[`aria-atomic`] ? `0.5rem 1rem` : `0.75rem 2rem`};
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

export const StyledButtonWhite = styled(StyledButton)`
  background-color: rgb(255, 255, 255);
  color: #13273f;
  border: 1px solid #dbe3eb;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
interface ButtonProps {
  white?: boolean;
  small?: boolean;
}
const ButtonDefault: React.FunctionComponent<ButtonProps> = ({
  children,
  white,
  small,
  ...rest
}) =>
  white ? (
    <StyledButtonWhite {...rest} aria-atomic={small}>
      {children}
    </StyledButtonWhite>
  ) : (
    <StyledButton {...rest} aria-atomic={small}>
      {children}
    </StyledButton>
  );

export default ButtonDefault;
