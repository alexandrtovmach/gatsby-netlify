import React, { StrictMode } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <StrictMode>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StrictMode>
);

export default Layout;
