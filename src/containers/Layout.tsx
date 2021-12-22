import { Menu, MenuButton, MenuItem, SubMenu } from '@szhsin/react-menu';
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const Layout: React.FunctionComponent = ({ children }) => (
  <Main>
    <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
      <MenuItem>New File</MenuItem>
      <SubMenu label="Open">
        <MenuItem>index.html</MenuItem>
        <MenuItem>example.js</MenuItem>
        <SubMenu label="Styles">
          <MenuItem>about.css</MenuItem>
          <MenuItem>home.css</MenuItem>
          <MenuItem>index.css</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem>Save</MenuItem>
    </Menu>
    {children}
  </Main>
);

export default Layout;
