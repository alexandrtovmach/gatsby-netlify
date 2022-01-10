import React from 'react';
import Main from '../containers/Layout';
import qrCodePaymentsContent from '../../content/pages/accept-payments-qr-code-payments.yml';
import QrCodePaymentsContainer from '@/components/Accept-payments-qr-code-payments';

export interface QrCodePaymentsContent {
  viewport1: {
    title1: string;
    title2: string;
    description: string;
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
    title: string;
    description: string;
    stepCards: {
      label: string;
      description: string;
      icon: string;
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
const QrCodePayments: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4, viewport5 } =
    qrCodePaymentsContent as unknown as QrCodePaymentsContent;
  return (
    <Main>
      <QrCodePaymentsContainer
        content={{ viewport1, viewport2, viewport3, viewport4, viewport5 }}
      />
    </Main>
  );
};

export default QrCodePayments;
