import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import fbIcon from '../assets/img/fbIcon.svg';
import twitterIcon from '../assets/img/twitterIcon.svg';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import logo from '../assets/img/logo.svg';
import footerContent from '../../content/components/footer.yml';
import ButtonAppStore from '@/components/ButtonAppStore';
import ButtonGooglePlay from '@/components/ButtonGooglePlay';

const FooterWrapper = styled.div`
  padding: 5rem;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    padding: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
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

interface LayoutFooterContent {
  label1: string;
  phone: string;
  label2: string;
  email: string;
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

const Footer: React.FunctionComponent = () => {
  const {
    label1,
    phone,
    label2,
    email,
    productsSection,
    resourcesSection,
    legalSection,
  } = footerContent as unknown as LayoutFooterContent;
  return (
    <FooterWrapper>
      <div>
        <img src={logo} alt="logo" />
        <FooterContactLabel>{label1}</FooterContactLabel>
        <FooterContact>{phone}</FooterContact>
        <FooterContactLabel>{label2}</FooterContactLabel>
        <FooterContact>{email}</FooterContact>
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
    </FooterWrapper>
  );
};

export default Footer;
