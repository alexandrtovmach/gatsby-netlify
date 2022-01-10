import React from 'react';
import Main from '../containers/Layout';
import inStorePaymentsContent from '../../content/pages/accept-payments-in-store-payments.yml';
import InStorePaymentsContainer from '@/containers/Accept-payments-in-store-payments';

export interface InStorePaymentsContent {
  viewport1: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    description1: string;
    description2: string;
    description3: string;
    appStoreButton: {
      url: string;
    };
    googlePlayButton: {
      url: string;
    };
  };
  viewport2: {
    title: string;
    description: string;
    videoUrl: string;
    instantPaymentCards: {
      text: string;
    }[];
  };
  viewport3: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
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

const InStorePayments: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    inStorePaymentsContent as unknown as InStorePaymentsContent;
  return (
    <Main>
      <InStorePaymentsContainer
        content={{ viewport1, viewport2, viewport3, viewport4 }}
      />
    </Main>
  );
};

export default InStorePayments;
