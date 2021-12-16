import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 48px;
  line-height: 60px;
  font-weight: bold;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 54px;
  font-weight: bold;
`;

const StyledH3 = styled.h3`
  font-size: 26px;
  line-height: 40px;
  font-weight: bold;
`;

const H1: React.FunctionComponent = ({ children }) => (
  <StyledH1>{children}</StyledH1>
);

const H2: React.FunctionComponent = ({ children }) => (
  <StyledH2>{children}</StyledH2>
);

const H3: React.FunctionComponent = ({ children }) => (
  <StyledH3>{children}</StyledH3>
);

export { H1, H2, H3 };
