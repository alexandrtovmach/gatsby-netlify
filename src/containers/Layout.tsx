import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <Main>{children}</Main>
);

export default Layout;
