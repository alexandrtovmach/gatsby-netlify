import React from 'react';
import styled from 'styled-components';
import { H1, H2, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page6Vp1 from '../assets/img/page6Vp1.png';
import FirstViewport from '@/components/FirstViewport';
import CarouselCard from '@/components/CarouselCard';
import SolutionComponent from '@/components/SolutionCard';
import StepCard from '@/components/StepCard';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import bannerBg from '../assets/img/bannerQrCodePageBg.png';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.png';
import Section from '@/components/Section';
import { QrCodePaymentsContent } from '@/pages/accept-payments-qr-code-payments';

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
interface QrCodePaymentsProps {
  content: QrCodePaymentsContent;
}
const QrCodePaymentsContainer: React.FunctionComponent<QrCodePaymentsProps> = ({
  content: { viewport1, viewport2, viewport3, viewport4, viewport5 },
}) => (
  <>
    <FirstViewportWrapper resource={page4Vp1Bg}>
      <FirstViewport withRightPadding img={page6Vp1}>
        <H1>
          {viewport1.title1}&nbsp;
          <span className="accent-text">{viewport1.title2}</span>
        </H1>
        <Description>{viewport1.description}</Description>
        <ButtonDefault to={viewport1.button.url}>
          {viewport1.button.label}
        </ButtonDefault>
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

export default QrCodePaymentsContainer;
