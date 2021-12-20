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
  cursor: pointer;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;
const ButtonDefault: React.FunctionComponent = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export default ButtonDefault;
