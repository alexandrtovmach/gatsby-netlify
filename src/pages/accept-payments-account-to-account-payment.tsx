import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import accountToAccountPaymentsContent from '../../content/pages/accept-payments-account-to-account-payment.yml';
import { H1, H2, H3, P, Strong, Subtitle5 } from '@/components/Typography';
import ButtonDefault from '@/components/ButtonDefault';
import page2viewport1 from '../assets/img/page2viewport1.svg';
import section2Bg from '../assets/img/section2_bg.svg';
import arrowIcon from '../assets/icons/arrowIcon.svg';
import CarouselCard from '@/components/CarouselCard';
import StepCard from '@/components/StepCard';
import BenefitCard from '@/components/BenefitCard';
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import bannerBg from '../assets/img/bannerAccountToaccountPageBg.png';
import tickIconSrc from '../assets/icons/tickIcon.svg';
import FirstViewport from '../components/FirstViewport';
import BottomMessage from '@/components/BottomMessage';
import Section from '@/components/Section';

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
  flex: 1 0 30%;
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

const Section2BoxRight = styled.div`
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
  @media (max-width: 1200px) {
    flex: 1 1 50%;
    margin-left: 0;
    padding-left: 2rem;
    margin-top: 2rem;
  }
`;

const ButtonLink = styled.a`
  margin-right: 1rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
const Btn = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: 1rem;
  }
`;
const ThirdViewport = styled(Section)`
  background-color: #ffff;
`;

const CardWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const FourthViewport = styled(ThirdViewport)`
  padding-top: 0;
`;

const Vport4Description = styled(P)`
  margin-top: 1rem;
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
  @media (max-width: 1200px) {
    padding-bottom: 0;
  }
`;

const Viewport6H3 = styled(H3)`
  width: 40%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const BenefitCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

const SeventhViewport = styled(Section)`
  background-color: white;
  padding-top: 0;
  @media (max-width: 1200px) {
    background-color: inherit;
    margin-top: 5rem;
  }
`;

interface AcceptPaymentsAccountToAccountPageContent {
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
    getStartedButton: {
      label: string;
      url: string;
    };
    docButton: {
      label: string;
      url: string;
    };
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
        <a target="_blank" href={viewport1.button.url} rel="noreferrer">
          <ButtonDefault>{viewport1.button.label}</ButtonDefault>
        </a>
      </FirstViewport>

      <SecondViewport resource={section2Bg}>
        <Section2LeftSide>
          <Strong className="accent-text">{viewport2.label}</Strong>
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
            <ButtonLink
              target="_blank"
              href={viewport2.getStartedButton.url}
              rel="noreferrer"
            >
              <Btn>
                <ButtonDefault>
                  {viewport2.getStartedButton.label}
                </ButtonDefault>
              </Btn>
            </ButtonLink>
            <ButtonLink
              target="_blank"
              href={viewport2.docButton.url}
              rel="noreferrer"
            >
              <ButtonDefault white>
                {viewport2.docButton.label}&nbsp;
                <img src={arrowIcon} alt="button icon" />
              </ButtonDefault>
            </ButtonLink>
          </ButtonContainer>
        </Section2LeftSide>
        <Section2BoxRight>
          <Subtitle5>{viewport2.box1Title}</Subtitle5>
          <StyledUl>
            <StyledLi>{viewport2.boxListItem1}</StyledLi>
            <StyledLi>{viewport2.boxListItem2}</StyledLi>
            <StyledLi>{viewport2.boxListItem3}</StyledLi>
            <StyledLi>{viewport2.boxListItem4}</StyledLi>
          </StyledUl>
        </Section2BoxRight>
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
        <H2>{viewport4.title}</H2>
        <Vport4Description>{viewport4.description}</Vport4Description>
        <StepCardWrapper>
          {viewport4.stepCards.map((item) => (
            <StepCard
              key={item.label}
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
              key={item.title}
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
          appStoreButtonUrl={viewport7.appStoreButton.url}
          googlePlayButtonUrl={viewport7.googlePlayButton.url}
        />
        <BottomMessage
          title1={viewport7.lowerTitle1}
          title2={viewport7.lowerTitle2}
          text={viewport7.lowerText}
          button={viewport7.button}
        />
      </SeventhViewport>
    </Main>
  );
};

export default AcceptPaymentsAccountToAccount;
