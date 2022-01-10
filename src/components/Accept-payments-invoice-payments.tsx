import React from 'react';
import styled from 'styled-components';
import { H1, H3, P } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page5Vp1 from '../assets/img/page5Vp1.png';
import FirstViewport from './FirstViewport';
import SolutionComponent from '@/components/SolutionCard';
import CarouselCard from '@/components/CarouselCard';
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import BottomMessage from '@/components/BottomMessage';
import bannerBg from '../assets/img/bannerInvoicePaymentPageBg.png';
import page4Vp1Bg from '../assets/img/page4Vp1Bg.png';
import Section from '@/components/Section';
import { InvoicePaymentsPageContent } from '@/pages/accept-payments-invoice-payments';

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
const CardBox = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ThirdViewport = styled(Section)``;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 2rem;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const FourthViewport = styled(Section)`
  background-color: #ffff;
`;
const OfferCardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
const OfferCard = styled.div`
  border-radius: 20px;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  min-width: 200px;
  @media (max-width: 1200px) {
    flex-grow: 1;
    padding: 2rem 1rem;
  }
`;
const OfferCardLeft = styled(OfferCard)`
  background: linear-gradient(#2cd19e, #00f3a8);
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }
`;
const OfferCardRight = styled(OfferCard)`
  background: linear-gradient(#e4e6f0, #8181a5);
`;

const OfferCardLabel = styled.p`
  font-size: 30px;
  line-height: 43px;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
`;

const OfferCardDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: white;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const StyledButtonDefault = styled(ButtonDefault)`
  width: 60%;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;
const StyledA = styled.a`
  text-decoration: none;
  color: #1172aa;
`;
const FifthViewport = styled(Section)`
  background-color: #ffff;
  @media (max-width: 1200px) {
    padding-bottom: 1rem;
  }
`;
const SixthViewport = styled(Section)`
  background-color: #ffff;
  padding-top: 0;
`;
interface InvoicePaymentsPageProps {
  content: InvoicePaymentsPageContent;
}

const AcceptPaymentsInvoicePaymentsContainer: React.FunctionComponent<
  InvoicePaymentsPageProps
> = ({
  content: { viewport1, viewport2, viewport3, viewport4, viewport5, viewport6 },
}) => (
  <>
    <FirstViewportWrapper resource={page4Vp1Bg}>
      <FirstViewport withRightPadding img={page5Vp1}>
        <H1>
          {viewport1.title1}&nbsp;
          <span className="accent-text"> {viewport1.title2}</span>
        </H1>
        <BoldDescription>{viewport1.description1}</BoldDescription>
        <Description>{viewport1.description2}</Description>
        <ButtonDefault to={viewport1.button.url}>
          {viewport1.button.label}
        </ButtonDefault>
      </FirstViewport>
    </FirstViewportWrapper>

    <SecondViewport>
      <H3>{viewport2.title}</H3>
      <CardBox>
        {viewport2.viewport2Cards.map(({ title, text, image }) => (
          <SolutionComponent
            key={title}
            title={title}
            text={text}
            cardImgSrc={image}
          />
        ))}
      </CardBox>
    </SecondViewport>
    <ThirdViewport>
      <H3>{viewport3.title}</H3>
      <CardWrapper>
        {viewport3.viewport3Cards.map((item) => (
          <CarouselCard
            key={item.title}
            title={item.title}
            text={item.text}
            cardImgSrc={item.image}
          />
        ))}
      </CardWrapper>
    </ThirdViewport>
    <FourthViewport>
      <OfferCardsBox>
        <OfferCardLeft>
          <OfferCardLabel>
            {viewport4.leftTitle1}&nbsp;
            <span className="accent-text-black">{viewport4.leftTitle2}</span>
          </OfferCardLabel>
          <OfferCardDescription>
            {viewport4.leftDescription}
          </OfferCardDescription>
          <StyledButtonDefault to={viewport4.createAccountButton.url}>
            {viewport4.createAccountButton.label}
          </StyledButtonDefault>
        </OfferCardLeft>
        <OfferCardRight>
          <OfferCardLabel>
            <span className="accent-text-black">{viewport4.rightTitle1}</span>
          </OfferCardLabel>
          <OfferCardDescription>
            {viewport4.rightDescription1}
            &nbsp;
            <StyledA href={`mailto:${viewport4.rightDescription2}`}>
              {viewport4.rightDescription2}
            </StyledA>
            &nbsp;
            {viewport4.rightDescription3}
          </OfferCardDescription>
          <StyledButtonDefault to={viewport4.getInTouchButton.url}>
            {viewport4.getInTouchButton.label}
          </StyledButtonDefault>
        </OfferCardRight>
      </OfferCardsBox>
    </FourthViewport>
    <FifthViewport>
      <H3>{viewport5.title}</H3>
      <Carousel items={viewport5.carouselItems} />
    </FifthViewport>
    <SixthViewport>
      <Banner
        bgSrc={bannerBg}
        label={viewport6.bannerLabel}
        description={viewport6.bannerDescription}
        appStoreButtonUrl={viewport6.appStoreButton.url}
        googlePlayButtonUrl={viewport6.googlePlayButton.url}
      />
      <BottomMessage
        title1={viewport6.lowerTitle1}
        title2={viewport6.lowerTitle2}
        text={viewport6.lowerText}
        button={viewport6.button}
      />
    </SixthViewport>
  </>
);

export default AcceptPaymentsInvoicePaymentsContainer;
