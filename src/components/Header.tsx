import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { slide as BurgerMenu } from 'react-burger-menu';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import LogoSvg from '../assets/icons/logo.svg';
import headerContent from '../../content/components/header.yml';
import DropdownMenu from './DropdownMenu';
import ButtonDefault from './ButtonDefault';
import { SecondaryP } from './Typography';

const responsiveCSS = css`
  .bm-burger-button {
    display: none;
    @media (max-width: 1200px) {
      display: initial;
    }
  }
`;
const HeaderWrapper = styled.header`
  ${responsiveCSS}
  height: 70px;
  background-color: white;
  padding: 0 5rem;
  box-shadow: 0px 2px 18px rgba(108, 108, 138, 0.199);
  position: fixed;
  width: calc(100% - 5rem * 2);
  z-index: 6;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    width: calc(100% - 2rem * 2);
  }
`;

const LoginButton = styled(ButtonDefault)`
  margin-right: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const HeaderCompensator = styled.div`
  height: 70px;
`;

const ResponsiveLink = styled(Link)`
  display: none;
  @media (max-width: 1200px) {
    display: initial;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  transition: 200ms;
  margin-left: 2rem;
  color: black;
  a:visited {
    color: inherit;
  }
  &:hover {
    color: #2cd19e;
  }
`;

const NavItem = styled.div`
  margin-left: 2rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const NavRight = styled.div``;

const AccordionLinkItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: 1rem;
`;

const styles = {
  bmBurgerButton: {
    position: `absolute`,
    width: `36px`,
    height: `30px`,
    right: `2rem`,
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
    background: `#010a11`,
  },
  bmMenuWrap: {
    position: `fixed`,
    height: `100%`,
    top: 0,
  },
  bmMenu: {
    background: `#f4f7f9`,
    padding: `1rem`,
    zIndex: 6,
  },
  bmMorphShape: {
    fill: `#373a47`,
  },
  bmItemList: {
    color: `#f4f7f9`,
    padding: `0 1rem`,
    height: `calc(100% - 0.8em * 2)`,
    display: `flex`,
    flexDirection: `column`,
  },
  bmItem: {
    display: `inline-block`,
    textDecoration: `none`,
    color: `#13273f`,
    fontSize: `20px`,
    lineHeight: `2em`,
    textAlign: `left`,
  },
  bmOverlay: {
    background: `rgba(0, 0, 0, 0.664)`,
    right: 0,
    top: 0,
    backdropFilter: `blur(4px)`,
  },
};

const accordionButtonStyles = {
  background: `transparent`,
  color: `inherit`,
  padding: 0,
};

const accordionPanelStyles = {
  padding: `0.5rem 2rem`,
};

interface NavigationItem {
  label: string;
  description?: string;
  link?: string;
  nested?: NavigationItem[];
}

interface LayoutHeaderContent {
  navigation: NavigationItem[];
}

const Header: React.FunctionComponent = () => {
  const { navigation } = headerContent as unknown as LayoutHeaderContent;
  return (
    <>
      <HeaderWrapper>
        <ResponsiveLink to="/">
          <LogoSvg />
        </ResponsiveLink>
        <BurgerMenu styles={styles} right width="90%">
          {navigation.map(({ label, link, nested }) =>
            link ? (
              <Link key={label} to={link}>
                {label}
              </Link>
            ) : (
              <Accordion
                key={`header-nav-accordion-item-${label}`}
                allowZeroExpanded
              >
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton style={accordionButtonStyles}>
                      {label}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel style={accordionPanelStyles}>
                    {nested.map((nestedEl) => (
                      <AccordionLinkItem
                        key={`header-nested-nav-accordion-item-${nestedEl.label}`}
                        to={nestedEl.link}
                      >
                        <SecondaryP>{nestedEl.label}</SecondaryP>
                      </AccordionLinkItem>
                    ))}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            ),
          )}
          <div>
            <LoginButton white>Login</LoginButton>
            <ButtonDefault>Register</ButtonDefault>
          </div>
        </BurgerMenu>
        <Nav>
          <NavLeft>
            <Link to="/">
              <LogoSvg />
            </Link>
            {navigation.map((el) =>
              el.link ? (
                <StyledLink key={el.label} to={el.link}>
                  {el.label}
                </StyledLink>
              ) : (
                <NavItem key={el.label}>
                  <DropdownMenu
                    buttonText={el.label}
                    dropdownLinks={el.nested}
                  />
                </NavItem>
              ),
            )}
          </NavLeft>
          <NavRight>
            <LoginButton white small>
              Login
            </LoginButton>
            <ButtonDefault small>Register</ButtonDefault>
          </NavRight>
        </Nav>
      </HeaderWrapper>
      <HeaderCompensator />
    </>
  );
};

export default Header;
