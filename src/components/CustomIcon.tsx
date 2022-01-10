import React from 'react';
import styled from 'styled-components';

const Circle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: inherit;
  margin: 0.25rem;
`;

interface CustomIconProps {
  src: string;
}

const CustomIcon: React.FunctionComponent<CustomIconProps> = ({
  src,
  ...rest
}) => (
  <Circle {...rest}>
    <img src={src} alt="custom icon" />
  </Circle>
);

export default CustomIcon;
