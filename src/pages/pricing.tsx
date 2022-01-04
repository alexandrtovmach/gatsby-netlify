import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import pricingPageContent from '../../content/pages/pricing.yml';
import { H1, P } from '@/components/Typography';
import Section from '@/components/Section';
import PricingCard from '@/components/PricingCard';
import BottomMessage from '@/components/BottomMessage';

const PageWrapper = styled.section`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 247, 249, 1) 100%
  );
`;
const FirstViewport = styled(Section)`
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Description = styled(P)`
  margin-top: 2rem;
`;
const PricingCards = styled(Section)`
  display: flex;
  justify-content: space-between;
  padding-top: 0;
  padding-bottom: 0;
`;
const ThirdViewport = styled(Section)`
  padding-top: 0;
`;
interface PricingPageContent {
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
  };
}
const OpenBankingDataApis: React.FunctionComponent = () => {
  const { title, pricingCards, lowerText } =
    pricingPageContent as unknown as PricingPageContent;
  return (
    <Main>
      <PageWrapper>
        <FirstViewport>
          <Text>
            <H1>
              {title.title1} <span className="accent-text">{title.title2}</span>
              {` `}
              {title.title3}
            </H1>
            <Description>{title.description}</Description>
          </Text>
        </FirstViewport>
        <PricingCards>
          {pricingCards.map((item) => (
            <PricingCard
              label={item.label}
              title1={item.title1}
              title2={item.title2}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              description4={item.description4}
            />
          ))}
        </PricingCards>
        <ThirdViewport>
          <BottomMessage
            title1={lowerText.lowerTitle1}
            title2={lowerText.lowerTitle2}
            text={lowerText.lowerText}
          />
        </ThirdViewport>
      </PageWrapper>
    </Main>
  );
};

export default OpenBankingDataApis;
