import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import contactsPageContent from '../../content/pages/contacts.yml';
import { Subtitle1, Strong, SecondaryP } from '@/components/Typography';
import background from '../assets/img/contactsBg.png';
import fbIcon from '../assets/img/fbIcon.svg';
import twitterIcon from '../assets/img/twitterIcon.svg';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import Section from '@/components/Section';
import FormCard from '@/components/Form';

const Content = styled(Section)`
  display: flex;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #ffff;
  flex-wrap: wrap;
`;
const LeftSide = styled.div`
  flex-basis: 30%;
  padding-top: 5rem;
  flex-grow: 1;
`;
const ContactItems = styled.div``;

const Fragment = styled.div`
  margin-top: 2rem;
`;
const StyledSecondaryP = styled(SecondaryP)`
  margin-top: 0.5rem;
`;
const FollowLinks = styled.div`
  margin-top: 2rem;
`;
const ContactIcon = styled.img`
  margin-top: 1rem;
  margin-right: 0.5rem;
`;
const RightSide = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-basis: 70%;
  height: 100vh;
  @media (max-width: 1200px) {
    background-image: none;
    padding-right: 0;
  }
`;
const FormWrapper = styled.div`
  padding-top: 5rem;
  padding-right: calc((100vw - 1200px) / 2);
  flex-basis: 35%;
`;

interface ContactsPageContent {
  pageTitle: {
    title1: string;
    title2: string;
  };
  contactsList: {
    title: string;
    contactItems: {
      contact: string;
    }[];
  }[];
  followLinks: {
    title: string;
  };
}
const Contacts: React.FunctionComponent = () => {
  const { pageTitle, contactsList, followLinks } =
    contactsPageContent as unknown as ContactsPageContent;
  return (
    <Main>
      <Content>
        <LeftSide>
          <Subtitle1>
            {pageTitle.title1}
            {` `}
            <span className="accent-text">{pageTitle.title2}</span>
          </Subtitle1>
          <ContactItems>
            {contactsList.map((item) => (
              <Fragment key={item.title}>
                <Strong>{item.title}</Strong>
                {item.contactItems.map((items) => (
                  <StyledSecondaryP key={items.contact}>
                    {items.contact}
                  </StyledSecondaryP>
                ))}
              </Fragment>
            ))}

            <FollowLinks>
              <SecondaryP>{followLinks.title}</SecondaryP>
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
            </FollowLinks>
          </ContactItems>
        </LeftSide>
        <RightSide resource={background}>
          <FormWrapper>
            <FormCard />
          </FormWrapper>
        </RightSide>
      </Content>
    </Main>
  );
};

export default Contacts;
