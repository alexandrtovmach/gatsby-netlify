import React from 'react';
import Main from '../containers/Layout';
import invoicePaymentsPageContent from '../../content/pages/accept-payments-invoice-payments.yml';
import AcceptPaymentsInvoicePaymentsContainer from '@/components/Accept-payments-invoice-payments';

export interface InvoicePaymentsPageContent {
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
    viewport2Cards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport3: {
    title: string;
    viewport3Cards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport4: {
    leftTitle1: string;
    leftTitle2: string;
    leftDescription: string;
    createAccountButton: {
      label: string;
      url: string;
    };
    rightTitle1: string;
    rightDescription1: string;
    rightDescription2: string;
    rightDescription3: string;
    getInTouchButton: {
      label: string;
      url: string;
    };
  };
  viewport5: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport6: {
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

const AcceptPaymentsInvoicePayments: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4, viewport5, viewport6 } =
    invoicePaymentsPageContent as unknown as InvoicePaymentsPageContent;
  return (
    <Main>
      <AcceptPaymentsInvoicePaymentsContainer
        content={{
          viewport1,
          viewport2,
          viewport3,
          viewport4,
          viewport5,
          viewport6,
        }}
      />
    </Main>
  );
};

export default AcceptPaymentsInvoicePayments;
