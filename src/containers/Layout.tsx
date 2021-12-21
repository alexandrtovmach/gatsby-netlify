import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/img/logo.svg';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;
const responsiveCSS = css`
  .bm-burger-button {
    display: none;
    @media (max-width: 1080px) {
      display: initial;
    }
  }
`;
const Header = styled.div`
  ${responsiveCSS}
  height: 70px;
  background-color: white;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 18px rgba(108, 108, 138, 0.199);
  position: fixed;
  width: calc(100% - 5rem * 2);
`;

const Nav = styled.nav`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const HeaderCompensator = styled.div`
  height: 70px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  transition: 200ms;
  color: black;
  a:visited {
    color: inherit;
  }
  &:hover {
    color: #2cd19e;
  }
`;

// const ModalButton = styled.a`
//   width: auto;
//   background: none;
//   border: none;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 30px;
//   text-align: center;
//   transition: 200ms;
//   color: black;
//   cursor: pointer;
//   &:hover {
//     color: #2cd19e;
//   }
// `;

const LogInButton = styled.button`
  background-color: rgb(255, 255, 255);
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  width: 99px;
  height: 40px;
  font-size: 14px;
  transition: 200ms;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(243, 243, 243);
    filter: drop-shadow(0px 7px 20px rgba(108, 108, 138, 0.6));
  }
`;

const RegisterButton = styled(LogInButton)`
  background-color: rgb(19, 39, 63);
  color: white;
  &:hover {
    background-color: rgb(25, 56, 93);
  }
`;
const styles = {
  bmBurgerButton: {
    position: `absolute`,
    width: `36px`,
    height: `30px`,
    right: `5rem`,
    top: `20px`,
  },
  bmBurgerBars: {
    background: `#13273f`,
  },
  bmBurgerBarsHover: {
    background: `#a90000`,
  },
  bmCrossButton: {
    height: `24px`,
    width: `24px`,
  },
  bmCross: {
    background: `#bdc3c7`,
  },
  bmMenuWrap: {
    position: `fixed`,
    height: `100vh`,

    top: 0,
  },
  bmMenu: {
    background: `#000000`,
    padding: `2.5em 2em 0`,
  },
  bmMorphShape: {
    fill: `#373a47`,
  },
  bmItemList: {
    color: `#b8b7ad`,
    padding: `0.8em`,
    height: `calc(100% - 0.8em * 2)`,
    display: `flex`,
    flexDirection: `column`,
  },
  bmItem: {
    display: `inline-block`,
    textDecoration: `none`,
    color: `white`,
    fontSize: `20px`,
    lineHeight: `3em`,
    textAlign: `left`,
  },
  bmOverlay: {
    background: `rgba(0, 0, 0, 0.664)`,
    right: 0,
    top: 0,
    backdropFilter: `blur(4px)`,
  },
};
const Layout: React.FunctionComponent = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header>
        <a href="/">
          <img src={logo} alt="company logo" />
        </a>
        <Menu styles={styles} right width="30%">
          <StyledLink to="/">Accept Payments</StyledLink>
          <StyledLink to="/">Manage The Business</StyledLink>
          <StyledLink to="/">Pricing</StyledLink>
          <StyledLink to="/">Help</StyledLink>
          <StyledLink to="/">Blog</StyledLink>
          <StyledLink to="/">Contact Us</StyledLink>
          <div>
            <LogInButton>Login</LogInButton>
            <RegisterButton>Register</RegisterButton>
          </div>
        </Menu>
        <Nav>
          <StyledLink to="/">Accept Payments</StyledLink>
          <StyledLink to="/">Manage The Business</StyledLink>
          <StyledLink to="/">Pricing</StyledLink>
          <StyledLink to="/">Help</StyledLink>
          <StyledLink to="/">Blog</StyledLink>
          <StyledLink to="/">Contact Us</StyledLink>
          <div>
            <LogInButton>Login</LogInButton>
            <RegisterButton>Register</RegisterButton>
          </div>
        </Nav>
      </Header>
      <HeaderCompensator />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
