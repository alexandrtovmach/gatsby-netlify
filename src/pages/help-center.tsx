import React from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Main from '../containers/Layout';
import helpCenterPageContent from '../../content/pages/help-center.yml';
import { P, H1, Subtitle5, Strong, H2 } from '@/components/Typography';
import Section from '@/components/Section';
import HelpCenterCard from '@/components/HelpCenterCard';
import ButtonDefault from '@/components/ButtonDefault';

const PageWrapper = styled.section`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 247, 249, 1) 100%
  );
`;

const FirstViewport = styled(Section)`
  text-align: center;
`;
const Description = styled(P)`
  margin-top: 1rem;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;
`;
const SecondViewport = styled(Section)`
  @media (max-width: 1200px) {
    padding-top: 0;
  }
`;
const Vp2Title = styled(Subtitle5)`
  text-align: center;
  padding-top: 3rem;
  &:first-of-type {
    padding-top: 0;
  }
`;
const StyledAccordion = styled(Accordion)`
  border: none;
  padding: 2rem 5rem;
  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;
const StyledAccordionItem = styled(AccordionItem)`
  border-bottom: 1px solid #d9d9d9;
  padding: 1rem 0;
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  background: transparent;
  color: inherit;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const Plus = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #13273f;
`;
const Cross = styled(Plus)`
  color: #2cd19e;
`;
const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 1rem 0;
`;
const ThirdViewport = styled(Section)`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    height: auto;
  }
`;
const LowerDescription = styled(P)`
  margin: 1rem 0;
  width: 60%;
  text-align: center;
  &:last-of-type {
    margin-bottom: 2em;
  }
  &:first-of-type {
    margin-top: 2em;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

interface HelpCenterPageContent {
  viewport1: {
    title1: string;
    title2: string;
    description: string;
    helpCenterCards: {
      image: string;
      label: string;
    }[];
  };

  faq1: {
    title: string;
    faq1Items: {
      question: string;
      answer: string;
    }[];
  };
  faq2: {
    title: string;
    faq2Items: {
      question: string;
      answer: string;
    }[];
  };
  faq3: {
    title: string;
    faq3Items: {
      question: string;
      answer: string;
    }[];
  };
  lowerText: {
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText1: string;
    lowerText2: string;
  };
}
const HelpCenter: React.FunctionComponent = () => {
  const { viewport1, faq1, faq2, faq3, lowerText } =
    helpCenterPageContent as unknown as HelpCenterPageContent;
  return (
    <Main>
      <PageWrapper>
        <FirstViewport>
          <H1>
            {viewport1.title1}
            {` `}
            <span className="accent-text">{viewport1.title2}</span>
          </H1>
          <Description>{viewport1.description}</Description>
          <Cards>
            {viewport1.helpCenterCards.map((item) => (
              <HelpCenterCard
                key={item.label}
                imageSrc={item.image}
                label={item.label}
              />
            ))}
          </Cards>
        </FirstViewport>
        <SecondViewport>
          <Vp2Title>{faq1.title}</Vp2Title>
          <StyledAccordion allowZeroExpanded>
            {faq1.faq1Items.map((item) => (
              <StyledAccordionItem key={faq1.title}>
                <AccordionItemHeading>
                  <StyledAccordionItemButton>
                    <Strong>{item.question}</Strong>
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? <Cross>&#215;</Cross> : <Plus>&#43;</Plus>
                      }
                    </AccordionItemState>
                  </StyledAccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <P>{item.answer}</P>
                </StyledAccordionItemPanel>
              </StyledAccordionItem>
            ))}
          </StyledAccordion>
          <Vp2Title>{faq2.title}</Vp2Title>
          <StyledAccordion allowZeroExpanded>
            {faq2.faq2Items.map((item) => (
              <StyledAccordionItem key={faq2.title}>
                <AccordionItemHeading>
                  <StyledAccordionItemButton>
                    <Strong>{item.question}</Strong>
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? <Cross>&#215;</Cross> : <Plus>&#43;</Plus>
                      }
                    </AccordionItemState>
                  </StyledAccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <P>{item.answer}</P>
                </StyledAccordionItemPanel>
              </StyledAccordionItem>
            ))}
          </StyledAccordion>
          <Vp2Title>{faq3.title}</Vp2Title>
          <StyledAccordion allowZeroExpanded>
            {faq3.faq3Items.map((item) => (
              <StyledAccordionItem key={faq3.title}>
                <AccordionItemHeading>
                  <StyledAccordionItemButton>
                    <Strong>{item.question}</Strong>
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? <Cross>&#215;</Cross> : <Plus>&#43;</Plus>
                      }
                    </AccordionItemState>
                  </StyledAccordionItemButton>
                </AccordionItemHeading>
                <StyledAccordionItemPanel>
                  <P>{item.answer}</P>
                </StyledAccordionItemPanel>
              </StyledAccordionItem>
            ))}
          </StyledAccordion>
        </SecondViewport>
        <ThirdViewport>
          <H2>
            <span className="accent-text"> {lowerText.lowerTitle1}</span>&nbsp;
            {lowerText.lowerTitle2}
            &nbsp;
          </H2>
          <LowerDescription>
            {lowerText.lowerText1}
            {` `}
            <span className="accent-text-blue">{lowerText.lowerText2}</span>
          </LowerDescription>
          <ButtonDefault>GET IN TOUCH</ButtonDefault>
        </ThirdViewport>
      </PageWrapper>
    </Main>
  );
};

export default HelpCenter;
