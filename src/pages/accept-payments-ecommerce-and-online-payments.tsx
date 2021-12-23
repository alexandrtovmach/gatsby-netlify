import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import eCommercePaymentsContent from '../../content/pages/accept-payments-ecommerce-and-online-payments.yml';
import { H1, H2, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page3viewport1 from '../assets/img/page3viewport1.svg';
import FirstViewport from '../components/FirstViewport';
import section2Bg from '../assets/img/section2_bg.svg';
import BenefitCard from '@/components/BenefitCard';
import tickIconSrc from '../assets/img/tickIcon.svg';
import bankingAppImg from '../assets/img/bankingAppImg.svg';
import page3Vp3Bg from '../assets/img/page3Vp3Bg.svg';
import PluginCard from '@/components/PluginCard';
import Carousel from '../components/Carousel';
import Banner from '@/components/Banner';
import bannerBg from '../assets/img/bannerEcommercePageBg.svg';
import BottomMessage from '@/components/BottomMessage';

const Section = styled.section`
  padding: 5rem calc((100vw - 1400px) / 2);

  @media (max-width: 1440px) {
    padding: 5rem calc((100vw - 900px) / 2);
  }
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
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding-bottom: 0;
`;

const ThirdViewport = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
const BenefitCardsLeft = styled.div``;
const BenefitCardsRight = styled(BenefitCardsLeft)``;
const PluginCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const TextWrapper = styled.div`
  width: 50%;
`;

const FourthViewport = styled(Section)`
  background-color: #ffff;
`;
const FifthViewport = styled(Section)`
  padding-top: 0;
  background-color: #ffff;
`;
interface AcceptPaymentsAccountToAccountPageContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };
  benefitCards: {
    title: string;
    description: string;
  }[];
  viewport3: {
    title1: string;
    title2: string;
    description: string;
  };
  pluginCards: {
    title: string;
    image: string;
  }[];
  viewport4: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
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
const AcceptPaymentsAccountToAccount: React.FunctionComponent = () => {
  const {
    viewport1,
    benefitCards,
    viewport3,
    pluginCards,
    viewport4,
    viewport5,
  } = eCommercePaymentsContent as unknown as AcceptPaymentsAccountToAccountPageContent;
  return (
    <Main>
      <FirstViewport withRightPadding img={page3viewport1}>
        <H1>
          {viewport1.title1}&nbsp;
          <span className="accent-text"> {viewport1.title2}</span>
        </H1>
        <Description>{viewport1.description1}</Description>
        <Description>
          {viewport1.description2}
          <span className="accent-text-black-bold">
            &nbsp;
            {viewport1.description3}
          </span>
          &nbsp;
          {viewport1.description4}
        </Description>
        <ButtonDefault>REGISTER NOW</ButtonDefault>
      </FirstViewport>
      <SecondViewport resource={section2Bg}>
        <BenefitCardsLeft>
          {benefitCards.slice(0, 2).map((item) => (
            <BenefitCard
              title={item.title}
              description={item.description}
              icon={tickIconSrc}
            />
          ))}
        </BenefitCardsLeft>
        <img src={bankingAppImg} alt="banking app" />
        <BenefitCardsRight>
          {benefitCards.slice(2).map((item) => (
            <BenefitCard
              title={item.title}
              description={item.description}
              icon={tickIconSrc}
            />
          ))}
        </BenefitCardsRight>
      </SecondViewport>
      <ThirdViewport resource={page3Vp3Bg}>
        <TextWrapper>
          <H2>
            <span className="accent-text">{viewport3.title1}</span>
            &nbsp;
            {viewport3.title2}
          </H2>
          <P>{viewport3.description}</P>
        </TextWrapper>
        <PluginCardWrapper>
          {pluginCards.map((item) => (
            <PluginCard title={item.title} imageSrc={item.image} />
          ))}
        </PluginCardWrapper>
      </ThirdViewport>
      <FourthViewport>
        <H3>{viewport4.title}</H3>
        <Carousel items={viewport4.carouselItems} />
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

export default AcceptPaymentsAccountToAccount;
