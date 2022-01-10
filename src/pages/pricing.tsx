import React from 'react';
import Main from '../containers/Layout';
import pricingPageContent from '../../content/pages/pricing.yml';
import PricingContainer from '@/components/Pricing';

export interface PricingPageContent {
  title: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
  };

  pricingCards: {
    label: string;
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  }[];

  lowerText: {
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
    button: {
      label: string;
      url: string;
    };
  };
}
const Pricing: React.FunctionComponent = () => {
  const { title, pricingCards, lowerText } =
    pricingPageContent as unknown as PricingPageContent;
  return (
    <Main>
      <PricingContainer content={{ title, pricingCards, lowerText }} />
    </Main>
  );
};

export default Pricing;
