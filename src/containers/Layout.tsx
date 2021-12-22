import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
