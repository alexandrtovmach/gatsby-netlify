import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { slide as BurgerMenu } from 'react-burger-menu';
import fbIcon from '../assets/img/fbIcon.svg';
import twitterIcon from '../assets/img/twitterIcon.svg';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import logo from '../assets/img/logo.svg';
import DropdownMenu from '../components/DropdownMenu';
import headerContent from '../../content/components/header.yml';
import footerContent from '../../content/components/footer.yml';
import ButtonAppStore from '@/components/ButtonAppStore';
import ButtonGooglePlay from '@/components/ButtonGooglePlay';

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

const Footer = styled.div`
  padding: 5rem;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 1rem;
  color: #13273f;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
  color: #495b6c;
`;

const FooterContactLabel = styled.p`
  color: #8181a5;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin-top: 1rem;
`;

const FooterContact = styled.p`
  color: #13273f
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;

const ContactIcon = styled.img`
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const FooterButtons = styled.div`
  display: flex;
`;

const ButtonFooterLink = styled.a`
  margin-right: 1rem;
  margin-top: 1rem;
`;
interface LayoutHeaderContent {
  header: {
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    link6: string;
  };
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

interface LayoutFooterContent {
  footer: {
    label1: string;
    phone: string;
    label2: string;
    email: string;
  };
  productsSection: {
    title: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    link6: string;
  };
  resourcesSection: {
    title: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
  };
  legalSection: {
    title: string;
    link1: string;
    link2: string;
    link3: string;
  };
}

const Layout: React.FunctionComponent = ({ children }) => {
  const { header, dropdownLinks } =
    headerContent as unknown as LayoutHeaderContent;
  const { footer, productsSection, resourcesSection, legalSection } =
    footerContent as unknown as LayoutFooterContent;
  return (
    <>
      <Header>
        <BurgerMenu styles={styles} right width="60%">
          <StyledLink to="/">{header.link1}</StyledLink>
          <StyledLink to="/">{header.link2}</StyledLink>
          <StyledLink to="/">{header.link3}</StyledLink>
          <StyledLink to="/">{header.link4}</StyledLink>
          <StyledLink to="/">{header.link5}</StyledLink>
          <StyledLink to="/">{header.link6}</StyledLink>
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
              <DropdownMenu
                buttonText={header.link1}
                dropdownLinks={dropdownLinks}
              />
            </NavItem>
            <StyledLink to="/">{header.link2}</StyledLink>
            <StyledLink to="/">{header.link3}</StyledLink>
            <StyledLink to="/">{header.link4}</StyledLink>
            <StyledLink to="/">{header.link5}</StyledLink>
            <StyledLink to="/">{header.link6}</StyledLink>
          </NavLeft>
          <NavRight>
            <LogInButton>Login</LogInButton>
            <RegisterButton>Register</RegisterButton>
          </NavRight>
        </Nav>
      </Header>
      <HeaderCompensator />
      <Main>{children}</Main>
      <Footer>
        <div>
          <img src={logo} alt="logo" />
          <FooterContactLabel>{footer.label1}</FooterContactLabel>
          <FooterContact>{footer.phone}</FooterContact>
          <FooterContactLabel>{footer.label2}</FooterContactLabel>
          <FooterContact>{footer.email}</FooterContact>
          <div>
            <a href="/">
              <ContactIcon src={fbIcon} alt="facebook icon" />
            </a>
            <a href="/">
              <ContactIcon src={twitterIcon} alt="facebook icon" />
            </a>
            <a href="/">
              <ContactIcon src={linkedInIcon} alt="facebook icon" />
            </a>
            <a href="/">
              <ContactIcon src={instagramIcon} alt="facebook icon" />
            </a>
          </div>
        </div>
        <FooterSection>
          <FooterTitle>{productsSection.title}</FooterTitle>
          <FooterLink to="/">{productsSection.link1}</FooterLink>
          <FooterLink to="/">{productsSection.link2}</FooterLink>
          <FooterLink to="/">{productsSection.link3}</FooterLink>
          <FooterLink to="/">{productsSection.link4}</FooterLink>
          <FooterLink to="/">{productsSection.link5}</FooterLink>
          <FooterLink to="/">{productsSection.link6}</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{resourcesSection.title}</FooterTitle>
          <FooterLink to="/">{resourcesSection.link1}</FooterLink>
          <FooterLink to="/">{resourcesSection.link2}</FooterLink>
          <FooterLink to="/">{resourcesSection.link3}</FooterLink>
          <FooterLink to="/">{resourcesSection.link4}</FooterLink>
          <FooterLink to="/">{resourcesSection.link5}</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>{legalSection.title}</FooterTitle>
          <FooterLink to="/">{legalSection.link1}</FooterLink>
          <FooterLink to="/">{legalSection.link2}</FooterLink>
          <FooterLink to="/">{legalSection.link3}</FooterLink>
          <FooterButtons>
            <ButtonFooterLink href="/">
              <ButtonGooglePlay white />
            </ButtonFooterLink>
            <ButtonFooterLink href="/">
              <ButtonAppStore white />
            </ButtonFooterLink>
          </FooterButtons>
        </FooterSection>
      </Footer>
    </>
  );
};

export default Layout;
