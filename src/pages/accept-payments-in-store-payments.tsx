import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import inStorePaymentsContent from '../../content/pages/accept-payments-in-store-payments.yml';
import { H1, H2, P, Strong } from '@/components/Typography';
import page7Vp1 from '../assets/img/page7Vp1.png';
import FirstViewport from '../components/FirstViewport';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.png';
import videoImg from '../assets/img/videoImg.png';
import gradientBg from '../assets/img/gradientBg.png';
import pg7Vp3Img from '../assets/img/pg7Vp3Img.png';
import bannerBg from '../assets/img/bannerInStorePaymentsBg.png';
import InstantPaymentCard from '@/components/InstantPaymentCard';
import Section from '@/components/Section';
import ButtonDefault from '../components/ButtonDefault';
import GooglePlayBg from '../assets/icons/googlePlayBg.svg';
import AppleStoreBg from '../assets/icons/appStoreBg.svg';

const FirstViewportWrapper = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
const Description = styled(P)`
  margin: 1rem 0;
  &:last-of-type {
    margin-bottom: 2rem;
  }
  &:first-of-type {
    margin-top: 2rem;
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
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const ResponsiveH2 = styled(H2)`
  @media (max-width: 1200px) {
    margin-bottom: 1rem;
  }
`;
const PluginCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;
`;
const VideoLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const VideoImg = styled.img`
  width: 80%;
  margin-top: 5rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
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
    appStoreButton: {
      url: string;
    };
    googlePlayButton: {
      url: string;
    };
  };
  viewport2: {
    title: string;
    description: string;
    videoUrl: string;
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
    appStoreButton: {
      url: string;
    };
    googlePlayButton: {
      url: string;
    };
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
    button: {
      label: string;
      url: string;
    };
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
          <ButtonDefault withImage to={viewport1.googlePlayButton.url}>
            <GooglePlayBg />
          </ButtonDefault>
          {` `}
          <ButtonDefault withImage to={viewport1.appStoreButton.url}>
            <AppleStoreBg />
          </ButtonDefault>
        </FirstViewport>
      </FirstViewportWrapper>
      <SecondViewport>
        <TextWrapper>
          <ResponsiveH2>{viewport2.title}</ResponsiveH2>
          <P>{viewport2.description}</P>
        </TextWrapper>
        <PluginCardWrapper>
          {viewport2.instantPaymentCards.map((item) => (
            <InstantPaymentCard key={item.text} text={item.text} />
          ))}
        </PluginCardWrapper>
        <VideoLink target="_blank" href={viewport2.videoUrl} rel="noreferrer">
          <VideoImg src={videoImg} alt="video" />
        </VideoLink>
      </SecondViewport>
      <FirstViewport withRightPadding img={pg7Vp3Img}>
        <GreenP className="accent-text">{viewport3.label}</GreenP>
        <H1>{viewport3.title}&nbsp;</H1>
        <BoldDescription>{viewport3.description1}</BoldDescription>
        <Description>{viewport3.description2}</Description>
        <Description>{viewport3.description3}</Description>
      </FirstViewport>
      <ThirdViewport resource={gradientBg}>
        <Banner
          bgSrc={bannerBg}
          label={viewport4.bannerLabel}
          description={viewport4.bannerDescription}
          appStoreButtonUrl={viewport4.appStoreButton.url}
          googlePlayButtonUrl={viewport4.googlePlayButton.url}
        />
        <BottomMessage
          title1={viewport4.lowerTitle1}
          title2={viewport4.lowerTitle2}
          text={viewport4.lowerText}
          button={viewport4.button}
        />
      </ThirdViewport>
    </Main>
  );
};

export default InStorePayments;
