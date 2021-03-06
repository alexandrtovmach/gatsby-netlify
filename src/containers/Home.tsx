import React from 'react';
import styled from 'styled-components';
import Banner from '@/components/Banner';
import ButtonDefault from '@/components/ButtonDefault';
import ReviewCard from '@/components/ReviewCard';
import bannerHomePageBg from '../assets/img/bannerHomePageBg.png';
import imgItem1 from '../assets/img/imgItem1.png';
import section2Bg from '../assets/img/section2_bg.png';
import solutionCardLeft from '../assets/img/solutionCardLeft.png';
import solutionCardRight from '../assets/img/solutionCardRight.png';
import section4Img from '../assets/img/section4Img.png';
import section6Bg from '../assets/img/section6_bg.png';
import Carousel from '@/components/Carousel';
import SolutionComponent from '@/components/SolutionCard';
import {
  SecondaryP,
  H1,
  H2,
  H3,
  P,
  Strong,
  Subtitle1,
} from '@/components/Typography';
import FirstViewport from '@/components/FirstViewport';
import Section from '@/components/Section';
import { HomePageContent } from '@/pages';

const Description = styled(P)`
  margin: 1rem 0;
  &:last-of-type {
    margin-bottom: 2rem;
  }
  &:first-of-type {
    margin-top: 2rem;
  }
`;

const SecondSection = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Section2LeftSide = styled.div`
  flex: 1 1 50%;
`;

const Boxes = styled.div`
  display: flex;
  flex: 1 1 40%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;
const Section2BoxLeft = styled.div`
  background-color: white;
  border: 1px solid #dbe3eb;
  border-radius: 15px;
  box-shadow: 0px 9px 45px rgba(129, 129, 165, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 20%;
  margin: 0.5rem;
  padding: 2rem 3rem;
`;

const Section2BoxRight = styled(Section2BoxLeft)``;

const ThirdSection = styled(Section)``;

const CardBox = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const SolutionCard = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
    flex-grow: 1;
  }
`;
const SolutionCardLeft = styled(SolutionCard)`
  background-color: #13273f;
`;
const SolutionCardRight = styled(SolutionCard)`
  background-color: #2cd19e;
`;

const SolutionCardLabel = styled.p`
  padding-top: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 20px;
  line-height: 43px;
  font-weight: bold;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    padding: 2rem 2rem 0 2rem;
    line-height: 30px;
  }
`;

const SolutionCardDescription = styled.p`
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: white;
  @media (max-width: 1200px) {
    padding: 1rem 2rem 0 2rem;
  }
`;

const CodeImg = styled.img`
  padding-top: 2rem;
  align-self: flex-end;
  width: 90%;
`;

const FourthSection = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: 1200px) {
    padding-top: 5rem;
  }
`;

const Section4LeftSide = styled.div`
  flex: 1 1 50%;
`;
const Section4Img = styled.img`
  width: 50%;
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
  }
`;

const FifthSection = styled(Section)`
  background-color: #ffff;
`;

const Section5H3 = styled(H3)`
  width: 40%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const SixthSection = styled(Section)`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 7.5rem;
  @media (max-width: 1200px) {
    margin-bottom: 5rem;
  }
`;

const LowerTextBox = styled.div`
  margin-top: 5rem;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    height: auto;
  }
`;

interface HomePageProps {
  content: HomePageContent;
}

const HomeContainer: React.FunctionComponent<HomePageProps> = ({
  content: { section1, section2, section3, section4, section5, section6 },
}) => (
  <>
    <FirstViewport img={imgItem1}>
      <H1>
        {section1.title1}&nbsp;
        <span className="accent-text">{section1.title2}</span>&nbsp;
        {section1.title3}
      </H1>
      <Description>{section1.description}</Description>
      <Description>{section1.description2}</Description>
      <Description>{section1.description3}</Description>
      <ButtonDefault to={section1.button.url}>
        {section1.button.label}
      </ButtonDefault>
    </FirstViewport>
    <SecondSection resource={section2Bg}>
      <Section2LeftSide>
        <Strong className="accent-text">{section2.label}</Strong>
        <H2>{section2.title}</H2>
        <Description>{section2.description}</Description>
      </Section2LeftSide>
      <Boxes>
        <Section2BoxLeft>
          <Subtitle1 className="accent-text">{section2.box1Label}</Subtitle1>
          <SecondaryP>{section2.box1Text}</SecondaryP>
        </Section2BoxLeft>
        <Section2BoxRight>
          <Subtitle1 className="accent-text-blue">
            {section2.box2Label}
          </Subtitle1>
          <SecondaryP>{section2.box2Text}</SecondaryP>
        </Section2BoxRight>
      </Boxes>
    </SecondSection>
    <ThirdSection>
      <H3>{section3.title}</H3>
      <CardBox>
        {section3.cards.map(({ title, text, image }) => (
          <SolutionComponent
            key={title}
            title={title}
            text={text}
            cardImgSrc={image}
          />
        ))}
      </CardBox>
      <H3>{section3.title2}</H3>
      <ImgBox>
        <SolutionCardLeft>
          <SolutionCardLabel>
            {section3.labelLeft}&nbsp;
            <span className="accent-text">{section3.labelLeft2}</span>
          </SolutionCardLabel>
          <SolutionCardDescription>
            {section3.descriptionLeft}
          </SolutionCardDescription>
          <CodeImg src={solutionCardLeft} alt="code screenshot" />
        </SolutionCardLeft>
        <SolutionCardRight>
          <SolutionCardLabel>
            <span className="accent-text-black">{section3.labelRight}</span>
            &nbsp;
            {section3.labelRight2}
          </SolutionCardLabel>
          <SolutionCardDescription>
            {section3.descriptionRight}
          </SolutionCardDescription>
          <CodeImg src={solutionCardRight} alt="app screenshot" />
        </SolutionCardRight>
      </ImgBox>
    </ThirdSection>
    <FourthSection resource={section2Bg}>
      <Section4LeftSide>
        <H2>
          {section4.title}
          {` `}
          <span className="accent-text">{section4.title2}</span>
          {` `}
          {section4.title3}
        </H2>
        <Description>{section4.description}</Description>
        <ButtonDefault to={section4.button.url}>
          {section4.button.label}
        </ButtonDefault>
      </Section4LeftSide>
      <Section4Img src={section4Img} alt="section4 screenshot1" />
    </FourthSection>
    <FifthSection>
      <Section5H3>{section5.title}</Section5H3>
      <Carousel items={section5.carouselItems} />
    </FifthSection>
    <SixthSection resource={section6Bg}>
      <H2 style={{ textAlign: `center` }}>{section6.label}</H2>
      <P style={{ textAlign: `center` }}>{section6.description}</P>
      <ReviewBox>
        {section6.reviews.map(({ name, position, text, image }) => (
          <ReviewCard
            key={name}
            revierName={name}
            position={position}
            text={text}
            avatar={image}
          />
        ))}
      </ReviewBox>
      <Banner
        bgSrc={bannerHomePageBg}
        label={section6.bannerLabel}
        description={section6.bannerDescription}
        appStoreButtonUrl={section6.appStoreButton.url}
        googlePlayButtonUrl={section6.googlePlayButton.url}
      />
      <LowerTextBox>
        <H2>
          {section6.lowerTitle1}&nbsp;
          <span className="accent-text">{section6.lowerTitle2}</span>
          &nbsp;
          {section6.lowerTitle3}
        </H2>
        <Description>{section6.lowerText}</Description>
        <ButtonDefault to={section6.button.url}>
          {section6.button.label}
        </ButtonDefault>
      </LowerTextBox>
    </SixthSection>
  </>
);

export default HomeContainer;
