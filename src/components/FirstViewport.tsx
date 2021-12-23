import React from 'react';
import styled from 'styled-components';
import ButtonDefault from './ButtonDefault';
import { H1, P } from './Typography';

const Section = styled.section`
  padding: 5rem calc((100vw - 1400px) / 2);

  @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
  }
`;

const FirstViewportWrapper = styled(Section)`
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

interface ViewportProps {
  content: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    description2: string;
    description3: string;
  };
  img: string;
}
const FirstViewport: React.FunctionComponent<ViewportProps> = ({
  content,
  img,
}) => (
  <FirstViewportWrapper>
    <LeftSideContent>
      <H1>
        {content.title1}&nbsp;
        <span className="accent-text">{content.title2}</span>&nbsp;
        {content.title3}
      </H1>
      <Description>{content.description}</Description>
      <Description>{content.description2}</Description>
      <Description>{content.description3}</Description>
      <ButtonDefault white={false}>REGISTER NOW</ButtonDefault>
    </LeftSideContent>

    <PhoneImage src={img} alt="application screnshot" />
  </FirstViewportWrapper>
);

export default FirstViewport;
