import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Main from '../containers/Layout';
import accountToAccountPaymentsContent from '../../content/pages/accept-payments-account-to-account-payment.yml';
import { H1, H2, H3, P, StrongP, Subtitle5 } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page2viewport1 from '../assets/img/page2viewport1.svg';
import section2Bg from '../assets/img/section2_bg.svg';
import arrowIcon from '../assets/img/arrowIcon.svg';
import CarouselCard from '@/components/CarouselCard';
import StepCard from '@/components/StepCard';
import BenefitCard from '@/components/BenefitCard';
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import bannerBg from '../assets/img/bannerAccountToaccountPageBg.svg';
import tickIconSrc from '../assets/img/tickIcon.svg';
import FirstViewport from '../components/FirstViewport';
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
const BoldDescription = styled(Description)`
  font-size: 17px;
  font-weight: 600;
`;

const SecondViewport = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Section2LeftSide = styled.div`
  flex: 1 0 50%;
`;

const SectionTitle = styled(H2)`
  margin: 1rem 0 1rem 0;
`;
const StyledUl = styled.ul``;
const StyledLi = styled.li`
  font-size: 16px;
  color: #13273f;
  line-height: 35px;
  list-style: initial;
  &::marker {
    color: #2cd19e;
    font-size: 1.5em;
  }
  &:first-of-type {
    margin-top: 1em;
  }
`;

const Section2BoxLeft = styled.div`
  padding: 3rem 0;
  background-color: white;
  border: 1px solid #dbe3eb;
  border-radius: 15px;
  box-shadow: 0px 9px 45px rgba(129, 129, 165, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 1 50%;
  margin-bottom: -2rem;
  margin-left: 4rem;
`;

const ButtonLink = styled(Link)`
  margin-right: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const ThirdViewport = styled(Section)`
  background-color: #ffff;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const FourthViewport = styled(ThirdViewport)`
  padding-top: 0;
`;

const Vport4Description = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: #13273f;
`;

const StepCardWrapper = styled(CardWrapper)`
  width: 100%;
  justify-content: space-between;
`;

const FifthViewport = styled(Section)`
  background-color: #f4f7f9;
`;

const SixthViewport = styled(Section)`
  background-color: #ffff;
`;

const Viewport6H3 = styled(H3)`
  width: 40%;
`;

const BenefitCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
`;

const SeventhViewport = styled(Section)`
  background-color: white;
  padding-top: 0;
`;

interface AcceptPaymentsAccountToAccountPageContent {
  viewport1: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
  };
  viewport2: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    box1Title: string;
    boxListItem1: string;
    boxListItem2: string;
    boxListItem3: string;
    boxListItem4: string;
  };
  viewport3: {
    title: string;
    viewport3Cards: { title: string; text: string; image: string }[];
  };
  viewport4: {
    title: string;
    description: string;
    stepCards: {
      label: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  viewport5: {
    title: string;
    description: string;
    benefitCards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  viewport6: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport7: {
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
    viewport2,
    viewport3,
    viewport4,
    viewport5,
    viewport6,
    viewport7,
  } = accountToAccountPaymentsContent as unknown as AcceptPaymentsAccountToAccountPageContent;
  return (
    <Main>
      <FirstViewport img={page2viewport1}>
        <H1>
          <span className="accent-text"> {viewport1.title1}</span>&nbsp;
          {viewport1.title2}
        </H1>
        <BoldDescription>{viewport1.description1}</BoldDescription>
        <Description>{viewport1.description2}</Description>
        <ButtonDefault>REGISTER NOW</ButtonDefault>
      </FirstViewport>

      <SecondViewport resource={section2Bg}>
        <Section2LeftSide>
          <StrongP className="accent-text">{viewport2.label}</StrongP>
          <SectionTitle>{viewport2.title}</SectionTitle>
          <P>
            {viewport2.description1}&nbsp;
            <span className="accent-text-black-bold">
              {viewport2.description2}
            </span>
            &nbsp;
            {viewport2.description3}
          </P>
          <ButtonContainer>
            <ButtonLink to="/">
              <ButtonDefault>GET STARTED</ButtonDefault>
            </ButtonLink>
            <ButtonLink to="/">
              <ButtonDefault white>
                Read the documentation&nbsp;
                <img src={arrowIcon} alt="button icon" />
              </ButtonDefault>
            </ButtonLink>
          </ButtonContainer>
        </Section2LeftSide>
        <Section2BoxLeft>
          <Subtitle5>{viewport2.box1Title}</Subtitle5>
          <StyledUl>
            <StyledLi>{viewport2.boxListItem1}</StyledLi>
            <StyledLi>{viewport2.boxListItem2}</StyledLi>
            <StyledLi>{viewport2.boxListItem3}</StyledLi>
            <StyledLi>{viewport2.boxListItem4}</StyledLi>
          </StyledUl>
        </Section2BoxLeft>
      </SecondViewport>
      <ThirdViewport>
        <H3>{viewport3.title}</H3>
        <CardWrapper>
          {viewport3.viewport3Cards.map((item) => (
            <CarouselCard
              title={item.title}
              text={item.text}
              cardImgSrc={item.image}
            />
          ))}
        </CardWrapper>
      </ThirdViewport>
      <FourthViewport>
        <H2>{viewport4.title}</H2>
        <Vport4Description>{viewport4.description}</Vport4Description>
        <StepCardWrapper>
          {viewport4.stepCards.map((item) => (
            <StepCard
              label={item.label}
              title={item.title}
              description={item.description}
            />
          ))}
        </StepCardWrapper>
      </FourthViewport>
      <FifthViewport>
        <H2>{viewport5.title}</H2>
        <Vport4Description>{viewport5.description}</Vport4Description>
        <BenefitCardWrapper>
          {viewport5.benefitCards.map((item) => (
            <BenefitCard
              title={item.title}
              description={item.description}
              icon={tickIconSrc}
            />
          ))}
        </BenefitCardWrapper>
      </FifthViewport>
      <SixthViewport>
        <Viewport6H3>{viewport6.title}</Viewport6H3>
        <Carousel items={viewport6.carouselItems} />
      </SixthViewport>
      <SeventhViewport>
        <Banner
          bgSrc={bannerBg}
          label={viewport7.bannerLabel}
          description={viewport7.bannerDescription}
        />
        <BottomMessage
          title1={viewport7.lowerTitle1}
          title2={viewport7.lowerTitle2}
          text={viewport7.lowerText}
        />
      </SeventhViewport>
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
