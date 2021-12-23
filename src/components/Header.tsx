import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { slide as BurgerMenu } from 'react-burger-menu';
import logo from '../assets/img/logo.svg';
import headerContent from '../../content/components/header.yml';
import DropdownMenu from './DropdownMenu';

const responsiveCSS = css`
  .bm-burger-button {
    display: none;
    @media (max-width: 1080px) {
      display: initial;
    }
  }
`;
const HeaderWrapper = styled.div`
  ${responsiveCSS}
  height: 70px;
  background-color: white;
  padding: 0 5rem;
  box-shadow: 0px 2px 18px rgba(108, 108, 138, 0.199);
  position: fixed;
  width: calc(100% - 5rem * 2);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
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
  margin-left: 3rem;
  color: black;
  a:visited {
    color: inherit;
  }
  &:hover {
    color: #2cd19e;
  }
`;

const NavItem = styled.div`
  margin-left: 3rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const NavRight = styled.div``;

const LogInButton = styled.button`
  background-color: rgb(255, 255, 255);
  border: 1px solid #dbe3eb;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: rgb(243, 243, 243);
    filter: drop-shadow(0px 7px 20px rgba(108, 108, 138, 0.6));
  }
`;

const RegisterButton = styled(LogInButton)`
  background-color: rgb(19, 39, 63);
  margin-left: 1rem;
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
    height: `100%`,

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
    fontSize: `40px`,
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

interface LayoutHeaderContent {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  link5: string;
  link6: string;
  dropdownLinks: {
    link1: string;
    description1: string;
    link2: string;
    description2: string;
    link3: string;
    description3: string;
    link4: string;
    description4: string;
    link5: string;
    description5: string;
    link6: string;
    description6: string;
  };
}

const Header: React.FunctionComponent = () => {
  const { link1, link2, link3, link4, link5, link6, dropdownLinks } =
    headerContent as unknown as LayoutHeaderContent;
  return (
    <>
      <HeaderWrapper>
        <BurgerMenu styles={styles} right width="60%">
          <StyledLink to="/">{link1}</StyledLink>
          <StyledLink to="/">{link2}</StyledLink>
          <StyledLink to="/">{link3}</StyledLink>
          <StyledLink to="/">{link4}</StyledLink>
          <StyledLink to="/">{link5}</StyledLink>
          <StyledLink to="/">{link6}</StyledLink>
          <div>
            <LogInButton>Login</LogInButton>
            <RegisterButton>Register</RegisterButton>
          </div>
        </BurgerMenu>
        <Nav>
          <NavLeft>
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
            <NavItem>
              <DropdownMenu buttonText={link1} dropdownLinks={dropdownLinks} />
            </NavItem>
            <StyledLink to="/">{link2}</StyledLink>
            <StyledLink to="/">{link3}</StyledLink>
            <StyledLink to="/">{link4}</StyledLink>
            <StyledLink to="/">{link5}</StyledLink>
            <StyledLink to="/">{link6}</StyledLink>
          </NavLeft>
          <NavRight>
            <LogInButton>Login</LogInButton>
            <RegisterButton>Register</RegisterButton>
          </NavRight>
        </Nav>
      </HeaderWrapper>
      <HeaderCompensator />
    </>
  );
};

export default Header;