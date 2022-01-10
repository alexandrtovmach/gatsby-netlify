import React from 'react';
import Main from '../containers/Layout';
import helpCenterPageContent from '../../content/pages/help-center.yml';
import HelpCenterContainer from '@/containers/Help-center';

export interface HelpCenterPageContent {
  viewport1: {
    title1: string;
    title2: string;
    description: string;
    helpCenterCards: {
      image: string;
      label: string;
    }[];
  };

  faqList: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  }[];

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
const HelpCenter: React.FunctionComponent = () => {
  const { viewport1, faqList, lowerText } =
    helpCenterPageContent as unknown as HelpCenterPageContent;
  return (
    <Main>
      <HelpCenterContainer content={{ viewport1, faqList, lowerText }} />
    </Main>
  );
};

export default HelpCenter;
