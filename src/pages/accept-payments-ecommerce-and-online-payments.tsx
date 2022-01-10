import React from 'react';
import Main from '../containers/Layout';
import eCommercePaymentsContent from '../../content/pages/accept-payments-ecommerce-and-online-payments.yml';
import AcceptPaymentsEcommerceContainer from '@/components/Accept-payments-ecommerce-and-online-payments';

export interface AcceptPaymentsEcommerceContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    button: {
      label: string;
      url: string;
    };
  };
  benefitCards: {
    title: string;
    description: string;
  }[];
  viewport3: {
    title1: string;
    title2: string;
    description: string;
  };
  pluginCards: {
    title: string;
    image: string;
    link: string;
  }[];
  viewport4: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport5: {
    bannerLabel: string;
    bannerDescription: string;
    appStoreButton: {
      url: string;
    };
    googlePlayButton: {
      url: string;
    };
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
    button: {
      label: string;
      url: string;
    };
  };
}
const AcceptPaymentsEcommerce: React.FunctionComponent = () => {
  const {
    viewport1,
    benefitCards,
    viewport3,
    pluginCards,
    viewport4,
    viewport5,
  } = eCommercePaymentsContent as unknown as AcceptPaymentsEcommerceContent;
  return (
    <Main>
      <AcceptPaymentsEcommerceContainer
        content={{
          viewport1,
          benefitCards,
          viewport3,
          pluginCards,
          viewport4,
          viewport5,
        }}
      />
    </Main>
  );
};

export default AcceptPaymentsEcommerce;
