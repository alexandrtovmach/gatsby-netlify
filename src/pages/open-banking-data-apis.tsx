import React from 'react';
import Main from '../containers/Layout';
import openBankingDataApisContent from '../../content/pages/open-banking-data-apis.yml';
import OpenBankingDataApisContainer from '@/containers/Open-banking-data-apis';

export interface OpenBankingDataApisContent {
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
const OpenBankingDataApis: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    openBankingDataApisContent as unknown as OpenBankingDataApisContent;
  return (
    <Main>
      <OpenBankingDataApisContainer
        content={{ viewport1, viewport2, viewport3, viewport4 }}
      />
    </Main>
  );
};

export default OpenBankingDataApis;
