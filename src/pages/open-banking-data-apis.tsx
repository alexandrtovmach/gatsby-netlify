import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import openBankingDataApisContent from '../../content/pages/open-banking-data-apis.yml';
import { Body2, H1, H2, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page8Vp1 from '../assets/img/pg8Vp1Img.svg';
import FirstViewport from '../components/FirstViewport';
import CarouselCard from '@/components/CarouselCard';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import bannerBg from '../assets/img/bannerPaymentApisPageBg.png';
import pg8Vp3Bg from '../assets/img/pg8Vp3Bg.svg';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.svg';
import OpenBankingCard from '@/components/OpenBankingCard';

const Section = styled.section`
  padding: 5rem calc((100vw - 1400px) / 2);

  @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
  }
`;
const FirstViewportWrapper = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
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
const SecondViewport = styled(Section)`
  background-color: #ffff;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
const OpenBankingCardWrapper = styled(CardWrapper)`
  margin-bottom: 0;
`;
const GreenP = styled(Body2)`
  font-weight: bold;
  color: #2cd19e;
`;

const TitleWrapper = styled.div`
  width: 50%;
`;

const ThirdViewport = styled(Section)`
  background-color: #ffff;
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
interface OpenBankingDataApisContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
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
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
  };
}
const OpenBankingDataApis: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    openBankingDataApisContent as unknown as OpenBankingDataApisContent;
  return (
    <Main>
      <FirstViewportWrapper resource={page4Vp1Bg}>
        <FirstViewport withRightPadding img={page8Vp1}>
          <H1>
            {viewport1.title1}&nbsp;
            <span className="accent-text">{viewport1.title2}</span>
          </H1>
          <BoldDescription>{viewport1.description1}</BoldDescription>
          <Description>{viewport1.description2}</Description>
          <ButtonDefault>GET IN TOUCH</ButtonDefault>
        </FirstViewport>
      </FirstViewportWrapper>
      <SecondViewport>
        <TitleWrapper>
          <GreenP>{viewport2.label}</GreenP>
          <H2>{viewport2.title}</H2>
        </TitleWrapper>
        <OpenBankingCardWrapper>
          {viewport2.viewport2Cards.map((item) => (
            <OpenBankingCard
              title={item.title}
              text={item.text}
              cardImgSrc={item.image}
            />
          ))}
        </OpenBankingCardWrapper>
      </SecondViewport>
      <ThirdViewport resource={pg8Vp3Bg}>
        <TitleWrapper>
          <H3>{viewport3.title}</H3>
        </TitleWrapper>
        <CardWrapper>
          {viewport3.viewport3Cards.map((item) => (
            <CarouselCard
              title={item.title}
              text={item.text}
              cardImgSrc={item.image}
            />
          ))}
        </CardWrapper>
        <Banner
          bgSrc={bannerBg}
          label={viewport4.bannerLabel}
          description={viewport4.bannerDescription}
        />
        <BottomMessage
          title1={viewport4.lowerTitle1}
          title2={viewport4.lowerTitle2}
          text={viewport4.lowerText}
        />
      </ThirdViewport>
    </Main>
  );
};

export default OpenBankingDataApis;