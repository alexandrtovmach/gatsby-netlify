import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import paymentLinksContent from '../../content/pages/accept-payments-payment-links.yml';
import { H1, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import viewport1Img from '../assets/img/page4viewport1Img.png';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.png';
import FirstViewport from '../components/FirstViewport';
import LinkCard from '@/components/LinkCard';
import Carousel from '@/components/Carousel';
import bannerBg from '../assets/img/bannerPaymentLinksPageBg.png';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import Section from '@/components/Section';

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
`;
const TitleWrapper = styled.div`
  width: 70%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const LinkCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
const ThirdViewport = styled(Section)`
  background-color: #ffff;
  @media (max-width: 1200px) {
    padding-bottom: 1rem;
  }
`;
const FourthViewport = styled(Section)`
  background-color: #ffff;
  padding-top: 0;
`;

interface PaymentLinksContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    button: {
      label: string;
      url: string;
    };
  };
  viewport2: {
    title: string;
    description: string;
    linkCards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport3: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
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
const AcceptPaymentsAccountToAccount: React.FunctionComponent = () => {
  const { viewport1, viewport2, viewport3, viewport4 } =
    paymentLinksContent as unknown as PaymentLinksContent;
  return (
    <Main>
      <FirstViewportWrapper resource={page4Vp1Bg}>
        <FirstViewport withRightPadding img={viewport1Img}>
          <H1>
            {viewport1.title1}
            {` `}
            <span className="accent-text">{viewport1.title2}</span>
          </H1>
          <BoldDescription>{viewport1.description1}</BoldDescription>
          <Description>{viewport1.description2}</Description>
          <a target="_blank" href={viewport1.button.url} rel="noreferrer">
            <ButtonDefault>{viewport1.button.label}</ButtonDefault>
          </a>
        </FirstViewport>
      </FirstViewportWrapper>

      <SecondViewport>
        <TitleWrapper>
          <H3>{viewport2.title}</H3>
          <P>{viewport2.description}</P>
        </TitleWrapper>

        <LinkCardWrapper>
          {viewport2.linkCards.map((item) => (
            <LinkCard
              key={item.title}
              title={item.title}
              text={item.text}
              imageSrc={item.image}
            />
          ))}
        </LinkCardWrapper>
      </SecondViewport>
      <ThirdViewport>
        <H3>{viewport3.title}</H3>
        <Carousel items={viewport3.carouselItems} />
      </ThirdViewport>
      <FourthViewport>
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
      </FourthViewport>
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
