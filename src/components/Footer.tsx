import { Link } from 'gatsby';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import LogoSvg from '../assets/icons/logo.svg';
import footerContent from '../../content/components/footer.yml';
import ButtonDefault from './ButtonDefault';
import GooglePlayBg from '../assets/icons/googlePlayBgWhite.svg';
import AppleStoreBg from '../assets/icons/appStoreBgWhite.svg';

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
  gap: 0.5rem;
`;

const AppStore = styled(AppleStoreBg)`
  height: 100%;
  width: 100%;
`;

const GooglePlay = styled(GooglePlayBg)`
  height: 100%;
  width: 100%;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

interface NavSection {
  title: string;
  appStoreButton: string;
  googlePlayButton: string;
  links: {
    label: string;
    url: string;
  }[];
}

interface LayoutFooterContent {
  mainSection: {
    contacts: {
      label: string;
      contact: string;
    }[];
    socialMediaLinks: {
      image: string;
      link: string;
    }[];
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
        <Link to="/">
          <LogoSvg />
        </Link>
        {mainSection.contacts.map((item) => (
          <Fragment key={item.label}>
            <FooterContactLabel>{item.label}</FooterContactLabel>
            {item.contact.includes(`+`) ? (
              <ContactLink href={`tel:${item.contact}`}>
                <FooterContact>{item.contact}</FooterContact>
              </ContactLink>
            ) : (
              <ContactLink href={`mailto:${item.contact}`}>
                <FooterContact>{item.contact}</FooterContact>
              </ContactLink>
            )}
          </Fragment>
        ))}

        <div>
          {mainSection.socialMediaLinks.map((item) => (
            <a
              key={item.link}
              target="_blank"
              href={item.link}
              rel="noreferrer"
            >
              <ContactIcon src={item.image} alt="media icon" />
            </a>
          ))}
        </div>
      </div>
      <FooterSection>
        <FooterTitle>{productsSection.title}</FooterTitle>
        {productsSection.links.map(({ label, url }) => (
          <FooterLink key={url} to={url}>
            {label}
          </FooterLink>
        ))}
      </FooterSection>
      <FooterSection>
        <FooterTitle>{resourcesSection.title}</FooterTitle>
        {resourcesSection.links.map(({ label, url }) => (
          <FooterLink key={url} to={url}>
            {label}
          </FooterLink>
        ))}
      </FooterSection>
      <FooterSection>
        <FooterTitle>{legalSection.title}</FooterTitle>
        {legalSection.links.map(({ label, url }) => (
          <FooterLink key={url} to={url}>
            {label}
          </FooterLink>
        ))}
        <FooterButtons>
          <ButtonDefault withImage to={legalSection.googlePlayButton}>
            <GooglePlay />
          </ButtonDefault>
          <ButtonDefault withImage to={legalSection.appStoreButton}>
            <AppStore />
          </ButtonDefault>
        </FooterButtons>
      </FooterSection>
    </FooterWrapper>
  );
};

export default Footer;
