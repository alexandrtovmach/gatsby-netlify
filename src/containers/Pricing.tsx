import React from 'react';
import styled from 'styled-components';
import { H1, P } from '@/components/Typography';
import Section from '@/components/Section';
import PricingCard from '@/components/PricingCard';
import BottomMessage from '@/components/BottomMessage';
import { PricingPageContent } from '@/pages/pricing';

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
interface PricingPageProps {
  content: PricingPageContent;
}
const PricingContainer: React.FunctionComponent<PricingPageProps> = ({
  content: { title, pricingCards, lowerText },
}) => (
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
          key={item.label}
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
        button={lowerText.button}
      />
    </ThirdViewport>
  </PageWrapper>
);

export default PricingContainer;
