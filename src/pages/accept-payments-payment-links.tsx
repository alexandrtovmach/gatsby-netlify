import React from 'react';
import Main from '../containers/Layout';
import paymentLinksContent from '../../content/pages/accept-payments-payment-links.yml';
import AcceptPaymentsPaymentLinksContainer from '@/containers/Accept-payments-payment-links';

export interface PaymentLinksContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    button: {
      label: string;
      url: string;
    };
  };
  viewport2: {
    title: string;
    description: string;
    linkCards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport3: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport4: {
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
const AcceptPaymentsPaymentLinks: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    paymentLinksContent as unknown as PaymentLinksContent;
  return (
    <Main>
      <AcceptPaymentsPaymentLinksContainer
        content={{ viewport1, viewport2, viewport3, viewport4 }}
      />
    </Main>
  );
};

export default AcceptPaymentsPaymentLinks;
