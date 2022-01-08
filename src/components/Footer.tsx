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

interface NavSection {
  title: string;
  links: {
    label: string;
    url: string;
  }[];
}

interface LayoutFooterContent {
  mainSection: {
    label1: string;
    phone: string;
    label2: string;
    email: string;
  };
  productsSection: NavSection;
  resourcesSection: NavSection;
  legalSection: NavSection;
}

const Footer: React.FunctionComponent = () => {
  const { mainSection, productsSection, resourcesSection, legalSection } =
    footerContent as unknown as LayoutFooterContent;
  return (
    <FooterWrapper>
      <div>
        <img src={logo} alt="logo" />
        <FooterContactLabel>{mainSection.label1}</FooterContactLabel>
        <FooterContact>{mainSection.phone}</FooterContact>
        <FooterContactLabel>{mainSection.label2}</FooterContactLabel>
        <FooterContact>{mainSection.email}</FooterContact>
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
        {productsSection.links.map(({ label, url }) => (
          <FooterLink to={url}>{label}</FooterLink>
        ))}
      </FooterSection>
      <FooterSection>
        <FooterTitle>{resourcesSection.title}</FooterTitle>
        {resourcesSection.links.map(({ label, url }) => (
          <FooterLink to={url}>{label}</FooterLink>
        ))}
      </FooterSection>
      <FooterSection>
        <FooterTitle>{legalSection.title}</FooterTitle>
        {legalSection.links.map(({ label, url }) => (
          <FooterLink to={url}>{label}</FooterLink>
        ))}
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
