import React from 'react';
import partnershipPageContent from '../../content/pages/partnership.yml';
import Main from '../containers/Layout';
import PartnershipContainer from '@/containers/Partnership';

export interface PartnershipPageContent {
  viewport1: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
  };
  partnershipCards: {
    leftTitle1: string;
    leftTitle2: string;
    leftTitle3: string;
    leftDescription: string;
    rightTitle1: string;
    rightTitle2: string;
    rightDescription: string;
    button: {
      label: string;
      url: string;
    };
  };
}

const Partnership: React.FunctionComponent = () => {
  const { viewport1, partnershipCards } =
    partnershipPageContent as unknown as PartnershipPageContent;
  return (
    <Main>
      <PartnershipContainer content={{ viewport1, partnershipCards }} />
    </Main>
  );
};

export default Partnership;
