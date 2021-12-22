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
  section1: {
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
  section1,
  img,
}) => (
  <FirstViewportWrapper>
    <LeftSideContent>
      <H1>
        {section1.title1}&nbsp;
        <span className="accent-text">{section1.title2}</span>&nbsp;
        {section1.title3}
      </H1>
      <Description>{section1.description}</Description>
      <Description>{section1.description2}</Description>
      <Description>{section1.description3}</Description>
      <ButtonDefault>REGISTER NOW</ButtonDefault>
    </LeftSideContent>

    <PhoneImage src={img} alt="application screnshot" />
  </FirstViewportWrapper>
);

export default FirstViewport;
