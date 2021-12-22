import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import accountToAccountPaymentsContent from '../../content/pages/accept-payments-account-to-account-payment.yml';
import { H1, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page2viewport1 from '../assets/img/page2viewport1.svg';

const Section = styled.section`
  padding: 5rem calc((100vw - 1400px) / 2);

  @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
  }
`;

const FirstViewport = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 5rem * 2);
  padding-right: 0;
`;

const LeftSideContent = styled.div`
  flex: 1 1 30%;
`;
const PhoneImage = styled.img`
  height: 100%;
`;
const Description = styled(P)`
  margin: 1rem 0;
  &:last-of-type {
    margin-bottom: 2em;
  }
  &:first-of-type {
    margin-top: 2em;
  }
`;
const BoldDescription = styled(Description)`
  font-size: 17px;
  font-weight: 600;
`;
interface AcceptPaymentsAccountToAccountPageContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
  };
}
const AcceptPaymentsAccountToAccount: React.FunctionComponent = () => {
  const { viewport1 } =
    accountToAccountPaymentsContent as unknown as AcceptPaymentsAccountToAccountPageContent;
  return (
    <Main>
      <FirstViewport>
        <LeftSideContent>
          <H1>
            <span className="accent-text"> {viewport1.title1}</span>&nbsp;
            {viewport1.title2}
          </H1>
          <BoldDescription>{viewport1.description1}</BoldDescription>
          <Description>{viewport1.description2}</Description>
          <ButtonDefault>REGISTER NOW</ButtonDefault>
        </LeftSideContent>
        <PhoneImage src={page2viewport1} alt="application screnshot" />
      </FirstViewport>
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
