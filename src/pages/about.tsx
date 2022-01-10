import React from 'react';
import Main from '../containers/Layout';
import aboutPageContent from '../../content/pages/about.yml';
import AboutContainer from '@/components/About';

export interface AboutPageContent {
  viewport1: {
    pageTitle: string;
    title2: string;
    title3: string;
    title4: string;
    description1: string;
    description2: string;
    description3: string;
    viewport1Cards: {
      title1: string;
      title2: string;
      title3: string;
      description: string;
    }[];
  };
  viewport2: {
    title1: string;
    title2: string;
    teamCards: {
      avatar: string;
      name: string;
      position: string;
      socials: {
        url: string;
        type: SocialType;
      }[];
    }[];
  };
  lowerText: {
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText1: string;
    lowerText2: string;
    button: {
      label: string;
      url: string;
    };
  };
}
const About: React.FunctionComponent = () => {
  const { viewport1, viewport2, lowerText } =
    aboutPageContent as unknown as AboutPageContent;
  return (
    <Main>
      <AboutContainer content={{ viewport1, viewport2, lowerText }} />
    </Main>
  );
};

export default About;
