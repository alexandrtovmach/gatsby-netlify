import React from 'react';
import Main from '../containers/Layout';
import accountToAccountPaymentsContent from '../../content/pages/accept-payments-account-to-account-payment.yml';
import AcceptPaymentsAccountToAccountPaymentContainer from '@/containers/Accept-payments-account-to-account-payment';

export interface AcceptPaymentsAccountToAccountPageContent {
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
    label: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    box1Title: string;
    boxListItem1: string;
    boxListItem2: string;
    boxListItem3: string;
    boxListItem4: string;
    getStartedButton: {
      label: string;
      url: string;
    };
    docButton: {
      label: string;
      url: string;
    };
  };
  viewport3: {
    title: string;
    viewport3Cards: { title: string; text: string; image: string }[];
  };
  viewport4: {
    title: string;
    description: string;
    stepCards: {
      label: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  viewport5: {
    title: string;
    description: string;
    benefitCards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  viewport6: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport7: {
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
const AcceptPaymentsAccountToAccount: React.FunctionComponent = () => {
  const {
    viewport1,
    viewport2,
    viewport3,
    viewport4,
    viewport5,
    viewport6,
    viewport7,
  } = accountToAccountPaymentsContent as unknown as AcceptPaymentsAccountToAccountPageContent;
  return (
    <Main>
      <AcceptPaymentsAccountToAccountPaymentContainer
        content={{
          viewport1,
          viewport2,
          viewport3,
          viewport4,
          viewport5,
          viewport6,
          viewport7,
        }}
      />
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
