import React from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner';
import ButtonDefault from '../components/ButtonDefault';
import ReviewCard from '../components/ReviewCard';
import homeContent from '../../content/pages/home.yml';
import bannerHomePageBg from '../assets/img/bannerHomePageBg.svg';
import imgItem1 from '../assets/img/imgItem1.svg';
import section2Bg from '../assets/img/section2_bg.svg';
import solutionCardLeft from '../assets/img/solutionCardLeft.svg';
import solutionCardRight from '../assets/img/solutionCardRight.svg';
import section4Img from '../assets/img/section4Img.svg';
import section6Bg from '../assets/img/section6_bg.svg';
import Carousel from '../components/Carousel';
import SolutionComponent from '../components/SolutionCard';
import { Body3, H2, H3, P, StrongP, Subtitle1 } from '../components/Typography';
import Main from '../containers/Layout';
import FirstViewport from '@/components/FirstViewport';

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

const SecondSection = styled(Section)`
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
  margin-right: 2rem;
`;

const Section2BoxRight = styled(Section2BoxLeft)``;

const ThirdSection = styled(Section)``;

const CardBox = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
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
  width: calc(35rem - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const SolutionCardDescription = styled.p`
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: white;
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
`;
const Section4LeftSide = styled.div`
  flex: 0 1 50%;
`;
const Section4Img = styled.img`
  flex: 0 1 50%;
`;

const FifthSection = styled(Section)`
  background-color: #ffff;
`;

const Section5H3 = styled(H3)`
  width: 40%;
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
`;

const LowerTextBox = styled.div`
  margin-top: 5rem;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
interface HomePageContent {
  docTitle: string;
  section1: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    description2: string;
    description3: string;
  };
  section2: {
    label: string;
    title: string;
    description: string;
    box1Label: string;
    box1Text: string;
    box2Label: string;
    box2Text: string;
  };
  section3: {
    title: string;
    title2: string;
    labelLeft: string;
    labelLeft2: string;
    descriptionLeft: string;
    labelRight: string;
    labelRight2: string;
    descriptionRight: string;
    cards: { title: string; text: string; image: string }[];
  };
  section4: {
    title: string;
    title2: string;
    title3: string;
    description: string;
  };
  section5: {
    title: string;
    carouselItems: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  section6: {
    label: string;
    description: string;
    reviews: {
      name: string;
      position: string;
      text: string;
      image: string;
    }[];
    bannerLabel: string;
    bannerDescription: string;
    lowerTitle1: string;
    lowerTitle2: string;
    lowerTitle3: string;
    lowerText: string;
  };
}

const Home: React.FunctionComponent = () => {
  const { section1, section2, section3, section4, section5, section6 } =
    homeContent as unknown as HomePageContent;
  return (
    <Main>
      <FirstViewport content={section1} img={imgItem1} />
      <SecondSection resource={section2Bg}>
        <Section2LeftSide>
          <StrongP className="accent-text">{section2.label}</StrongP>
          <SectionTitle>{section2.title}</SectionTitle>
          <P>{section2.description}</P>
        </Section2LeftSide>
        <Section2BoxLeft>
          <Subtitle1 className="accent-text">{section2.box1Label}</Subtitle1>
          <Body3>{section2.box1Text}</Body3>
        </Section2BoxLeft>
        <Section2BoxRight>
          <Subtitle1 className="accent-text-blue">
            {section2.box2Label}
          </Subtitle1>
          <Body3>{section2.box2Text}</Body3>
        </Section2BoxRight>
      </SecondSection>
      <ThirdSection>
        <H3>{section3.title}</H3>
        <CardBox>
          {section3.cards.map(({ title, text, image }) => (
            <SolutionComponent title={title} text={text} cardImgSrc={image} />
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
          <SectionTitle>
            {section4.title}&nbsp;
            <span className="accent-text">{section4.title2}</span>&nbsp;
            {section4.title3}
          </SectionTitle>
          <Description>{section4.description}</Description>
          <ButtonDefault>GET STARTED</ButtonDefault>
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
        />
        <LowerTextBox>
          <H2>
            {section6.lowerTitle1}&nbsp;
            <span className="accent-text">{section6.lowerTitle2}</span>
            &nbsp;
            {section6.lowerTitle3}
          </H2>
          <p>{section6.lowerText}</p>
          <ButtonDefault>GET IN TOUCH</ButtonDefault>
        </LowerTextBox>
      </SixthSection>
    </Main>
  );
};

export default Home;
