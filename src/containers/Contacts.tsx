/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { Subtitle1, Strong, SecondaryP } from '@/components/Typography';
import background from '../assets/img/contactsBg.png';
import Section from '@/components/Section';
import FormCard from '@/components/Form';
import ContactIcon from '@/components/ContactIcon';
import { ContactsPageContent } from '@/pages/contacts';

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
const RightSide = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-basis: 70%;
  height: 100vh;
  @media (max-width: 1200px) {
    background-image: none;
    padding-right: 0;
  }
`;
const FormWrapper = styled.div`
  padding-top: 5rem;
  flex-basis: 50%;
`;
const ContactLink = styled.a`
  text-decoration: none;
`;
interface ContactsPageProps {
  content: ContactsPageContent;
}
const ContactsContainer: React.FunctionComponent<ContactsPageProps> = ({
  content: { pageTitle, contactsList, followLinks },
}) => (
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
              <div key={items.contact}>
                {/[+\d\s()]/.test(items.contact) ? (
                  <ContactLink href={`tel:${items.contact}`}>
                    <StyledSecondaryP key={items.contact}>
                      {items.contact}
                    </StyledSecondaryP>
                  </ContactLink>
                ) : items.contact.includes(`@`) ? (
                  <ContactLink href={`mailto:${items.contact}`}>
                    <StyledSecondaryP key={items.contact}>
                      {items.contact}
                    </StyledSecondaryP>
                  </ContactLink>
                ) : (
                  <StyledSecondaryP key={items.contact}>
                    {items.contact}
                  </StyledSecondaryP>
                )}
              </div>
            ))}
          </Fragment>
        ))}

        <FollowLinks>
          <SecondaryP>{followLinks.title}</SecondaryP>
          {followLinks.socials.map((item) => (
            <a key={item.url} target="_blank" href={item.url} rel="noreferrer">
              <ContactIcon type={item.type} />
            </a>
          ))}
        </FollowLinks>
      </ContactItems>
    </LeftSide>
    <RightSide resource={background}>
      <FormWrapper>
        <FormCard />
      </FormWrapper>
    </RightSide>
  </Content>
);

export default ContactsContainer;
