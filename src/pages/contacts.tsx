import React from 'react';
import Main from '../containers/Layout';
import contactsPageContent from '../../content/pages/contacts.yml';
import ContactsContainer from '@/components/Contacts';

export interface ContactsPageContent {
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
    socials: {
      url: string;
      type: SocialType;
    }[];
  };
}
const Contacts: React.FunctionComponent = () => {
  const { pageTitle, contactsList, followLinks } =
    contactsPageContent as unknown as ContactsPageContent;
  return (
    <Main>
      <ContactsContainer content={{ pageTitle, contactsList, followLinks }} />
    </Main>
  );
};

export default Contacts;
