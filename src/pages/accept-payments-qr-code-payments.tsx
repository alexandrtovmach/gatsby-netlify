import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import qrCodePaymentsContent from '../../content/pages/accept-payments-qr-code-payments.yml';
import { H1, H2, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page6Vp1 from '../assets/img/page6Vp1.svg';
import FirstViewport from '../components/FirstViewport';
import CarouselCard from '@/components/CarouselCard';
import SolutionComponent from '@/components/SolutionCard';
import StepCard from '@/components/StepCard';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import bannerBg from '../assets/img/bannerQrCodePageBg.png';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.svg';
import Section from '@/components/Section';

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
const SecondViewport = styled(Section)`
  background-color: #ffff;
`;
const CardWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: nowrap;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const ThirdViewport = styled(Section)``;

const CardWrapperVp3 = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FourthViewport = styled(Section)`
  background-color: #ffff;
`;
const StepCardWrapper = styled(CardWrapper)`
  width: 100%;
  justify-content: space-between;
`;
const FifthViewport = styled(Section)`
  background-color: #ffff;
  padding-top: 0;
`;
interface QrCodePaymentsContent {
  viewport1: {
    title1: string;
    title2: string;
    description: string;
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
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
  };
}
const QrCodePayments: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4, viewport5 } =
    qrCodePaymentsContent as unknown as QrCodePaymentsContent;
  return (
    <Main>
      <FirstViewportWrapper resource={page4Vp1Bg}>
        <FirstViewport withRightPadding img={page6Vp1}>
          <H1>
            {viewport1.title1}&nbsp;
            <span className="accent-text">{viewport1.title2}</span>
          </H1>
          <Description>{viewport1.description}</Description>
          <ButtonDefault>REGISTER NOW</ButtonDefault>
        </FirstViewport>
      </FirstViewportWrapper>

      <SecondViewport>
        <H3>{viewport2.title}</H3>
        <CardWrapper>
          {viewport2.viewport2Cards.map((item) => (
            <CarouselCard
              key={item.title}
              title={item.title}
              text={item.text}
              cardImgSrc={item.image}
            />
          ))}
        </CardWrapper>
      </SecondViewport>
      <ThirdViewport>
        <H3>{viewport2.title}</H3>
        <CardWrapperVp3>
          {viewport3.viewport3Cards.map(({ title, text, image }) => (
            <SolutionComponent
              key={title}
              title={title}
              text={text}
              cardImgSrc={image}
            />
          ))}
        </CardWrapperVp3>
      </ThirdViewport>
      <FourthViewport>
        <H2>{viewport4.title}</H2>
        <P>{viewport4.description}</P>
        <StepCardWrapper>
          {viewport4.stepCards.map((item) => (
            <StepCard
              key={item.label}
              label={item.label}
              description={item.description}
            />
          ))}
        </StepCardWrapper>
      </FourthViewport>
      <FifthViewport>
        <Banner
          bgSrc={bannerBg}
          label={viewport5.bannerLabel}
          description={viewport5.bannerDescription}
        />
        <BottomMessage
          title1={viewport5.lowerTitle1}
          title2={viewport5.lowerTitle2}
          text={viewport5.lowerText}
        />
      </FifthViewport>
    </Main>
  );
};

export default QrCodePayments;
