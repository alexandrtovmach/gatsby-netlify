import React from 'react';
import styled from 'styled-components';
import { H1, H2, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page3viewport1 from '../assets/img/page3viewport1.png';
import FirstViewport from './FirstViewport';
import section2Bg from '../assets/img/section2_bg.png';
import BenefitCard from '@/components/BenefitCard';
import bankingAppImg from '../assets/img/bankingAppImg.png';
import page3Vp3Bg from '../assets/img/page3Vp3Bg.png';
import PluginCard from '@/components/PluginCard';
import Carousel from './Carousel';
import Banner from '@/components/Banner';
import bannerBg from '../assets/img/bannerEcommercePageBg.png';
import BottomMessage from '@/components/BottomMessage';
import Section from '@/components/Section';
import { AcceptPaymentsEcommerceContent } from '@/pages/accept-payments-ecommerce-and-online-payments';

const Description = styled(P)`
  margin: 1rem 0;
  &:last-of-type {
    margin-bottom: 2rem;
  }
  &:first-of-type {
    margin-top: 2rem;
  }
`;

const SecondViewport = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding-bottom: 0;
  @media (max-width: 1200px) {
    padding-bottom: 5rem;
  }
`;
const Img = styled.img`
  @media (max-width: 1200px) {
    display: none;
  }
`;
const ThirdViewport = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
const BenefitCardsLeft = styled.div`
  flex-basis: 35%;
  @media (max-width: 1200px) {
    flex-grow: 1;
  }
`;
const BenefitCardsRight = styled(BenefitCardsLeft)``;
const PluginCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div`
  width: 60%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Vp3H2 = styled(H2)`
  @media (max-width: 1200px) {
    margin-bottom: 1rem;
  }
`;
const FourthViewport = styled(Section)`
  background-color: #ffff;
  @media (max-width: 1200px) {
    padding-bottom: 1rem;
  }
`;
const FifthViewport = styled(Section)`
  padding-top: 0;
  background-color: #ffff;
`;
interface AcceptPaymentsEcommerceProps {
  content: AcceptPaymentsEcommerceContent;
}
const AcceptPaymentsEcommerceContainer: React.FunctionComponent<
  AcceptPaymentsEcommerceProps
> = ({
  content: {
    viewport1,
    benefitCards,
    viewport3,
    pluginCards,
    viewport4,
    viewport5,
  },
}) => (
  <>
    <FirstViewport img={page3viewport1}>
      <H1>
        {viewport1.title1}&nbsp;
        <span className="accent-text">{viewport1.title2}</span>
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
      <ButtonDefault to={viewport1.button.url}>
        {viewport1.button.label}
      </ButtonDefault>
    </FirstViewport>
    <SecondViewport resource={section2Bg}>
      <BenefitCardsLeft>
        {benefitCards.slice(0, 2).map((item) => (
          <BenefitCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </BenefitCardsLeft>
      <Img src={bankingAppImg} alt="banking app" />
      <BenefitCardsRight>
        {benefitCards.slice(2).map((item) => (
          <BenefitCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </BenefitCardsRight>
    </SecondViewport>
    <ThirdViewport resource={page3Vp3Bg}>
      <TextWrapper>
        <Vp3H2>
          <span className="accent-text">{viewport3.title1}</span>
          {` `}
          {viewport3.title2}
        </Vp3H2>
        <P>{viewport3.description}</P>
      </TextWrapper>
      <PluginCardWrapper>
        {pluginCards.map((item) => (
          <PluginCard
            key={item.title}
            title={item.title}
            imageSrc={item.image}
            link={item.link}
          />
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
        appStoreButtonUrl={viewport5.appStoreButton.url}
        googlePlayButtonUrl={viewport5.googlePlayButton.url}
      />
      <BottomMessage
        title1={viewport5.lowerTitle1}
        title2={viewport5.lowerTitle2}
        text={viewport5.lowerText}
        button={viewport5.button}
      />
    </FifthViewport>
  </>
);

export default AcceptPaymentsEcommerceContainer;
