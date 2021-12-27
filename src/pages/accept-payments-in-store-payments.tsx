import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import inStorePaymentsContent from '../../content/pages/accept-payments-in-store-payments.yml';
import { H1, H2, P, Strong } from '@/components/Typography';
import page7Vp1 from '../assets/img/page7Vp1.svg';
import FirstViewport from '../components/FirstViewport';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import ButtonGooglePlay from '@/components/ButtonGooglePlay';
import ButtonAppStore from '@/components/ButtonAppStore';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.svg';
import tickIcon from '../assets/img/tickIcon.svg';
import videoImg from '../assets/img/videoImg.svg';
import gradientBg from '../assets/img/gradientBg.svg';
import pg7Vp3Img from '../assets/img/pg7Vp3Img.svg';
import bannerBg from '../assets/img/bannerInStorePaymentsBg.png';
import InstantPaymentCard from '@/components/InstantPaymentCard';

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
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  width: 50%;
`;
const PluginCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const VideoImg = styled.img`
  align-self: center;
  width: 80%;
  margin-top: 5rem;
`;

const ThirdViewport = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const GreenP = styled(Strong)`
  margin: 1rem 0;
`;
interface InStorePaymentsContent {
  viewport1: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    description1: string;
    description2: string;
    description3: string;
  };
  viewport2: {
    title: string;
    description: string;
    instantPaymentCards: {
      text: string;
    }[];
  };
  viewport3: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
  viewport4: {
    bannerLabel: string;
    bannerDescription: string;
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
  };
}

const InStorePayments: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    inStorePaymentsContent as unknown as InStorePaymentsContent;
  return (
    <Main>
      <FirstViewportWrapper resource={page4Vp1Bg}>
        <FirstViewport withRightPadding img={page7Vp1}>
          <H1>
            {viewport1.title1}
            <span className="accent-text"> {viewport1.title2}</span>&nbsp;
            {viewport1.title3}
            <span className="accent-text"> {viewport1.title4}</span>
          </H1>
          <BoldDescription>{viewport1.description1}</BoldDescription>
          <Description>{viewport1.description2}</Description>
          <BoldDescription>{viewport1.description3}</BoldDescription>
          <ButtonAppStore />
          <ButtonGooglePlay />
        </FirstViewport>
      </FirstViewportWrapper>
      <SecondViewport>
        <TextWrapper>
          <H2>{viewport2.title}</H2>
          <P>{viewport2.description}</P>
        </TextWrapper>
        <PluginCardWrapper>
          {viewport2.instantPaymentCards.map((item) => (
            <InstantPaymentCard text={item.text} imageSrc={tickIcon} />
          ))}
        </PluginCardWrapper>
        <VideoImg src={videoImg} alt="video" />
      </SecondViewport>
      <ThirdViewport resource={gradientBg}>
        <FirstViewport withRightPadding img={pg7Vp3Img}>
          <GreenP className="accent-text">{viewport3.label}</GreenP>
          <H1>{viewport3.title}&nbsp;</H1>
          <BoldDescription>{viewport3.description1}</BoldDescription>
          <Description>{viewport3.description2}</Description>
          <Description>{viewport3.description3}</Description>
        </FirstViewport>
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

export default InStorePayments;
