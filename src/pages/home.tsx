import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import imgItem1 from '../assets/img/imgItem1.svg';
import section2Bg from '../assets/img/section2_bg.svg';
import section2Img from '../assets/img/section2Img.svg';
import section3Img1 from '../assets/img/section3Img1.svg';
import section3Img2 from '../assets/img/section3Img2.svg';
import section4Img from '../assets/img/section4Img.svg';
import section6Bg from '../assets/img/section6_bg.svg';
import bannerHomePageBg from '../assets/img/bannerHomePageBg.svg';
import homeContent from '../../content/pages/home.yml';
import { H1, H2, H3, P, StrongP } from '../components/Typography';
import SolutionComponent from '../components/SolutionCard';
import ButtonDefault from '@/components/ButtonDefault';
import Carousel from '../components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import Banner from '@/components/Banner';

const FirstSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
`;
const LeftSideContent = styled.div`
  padding: 10rem 0 5rem 8rem;
  flex-basis: 50%;
  flex-grow: 1;
`;

const Description = styled(P)`
  margin-top: 1.7rem;
  &:last-of-type {
    margin-bottom: 3em;
  }
`;

const PhoneImage = styled.img`
  flex: 0 1 30%;
  margin-bottom: -20%;
`;

const SecondSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding: 8rem 8rem 8rem 0;
`;

const Section2LeftSide = styled.div`
  padding-left: 8rem;
  flex-basis: 47%;
  flex-grow: 1;
`;

const SectionTitle = styled(H2)`
  margin: 1rem 0 1rem 0;
`;

const Section2Img = styled.img`
  width: 40%;
  flex: 0 1 45%;
  margin-bottom: -2rem;
`;

const ThirdSection = styled.section`
  padding: 8rem;
`;

const CardBox = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
`;
const FourthSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 8rem;
`;
const Section4LeftSide = styled.div`
  flex: 0 1 50%;
`;
const Section4Img = styled.img`
  flex: 0 1 50%;
`;

const FifthSection = styled.section`
  padding: 8rem 8rem;
  background-color: #ffff;
`;

const Section5H3 = styled(H3)`
  width: 40%;
`;

const SixthSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8rem 8rem;
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
  };
  section3: {
    label: string;
    label2: string;
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
      <FirstSection>
        <LeftSideContent>
          <H1>
            {section1.title1}&nbsp;
            <span className="accent-text">{section1.title2}</span>&nbsp;
            {section1.title3}
          </H1>
          <Description>{section1.description}</Description>
          <Description>{section1.description2}</Description>
          <Description>{section1.description3}</Description>
          <ButtonDefault>REGISTER NOW</ButtonDefault>
        </LeftSideContent>

        <PhoneImage src={imgItem1} alt="application screnshot" />
      </FirstSection>
      <SecondSection resource={section2Bg}>
        <Section2LeftSide>
          <StrongP className="accent-text">{section2.label}</StrongP>
          <SectionTitle>{section2.title}</SectionTitle>
          <P>{section2.description}</P>
        </Section2LeftSide>
        <Section2Img src={section2Img} alt="section2 screenshot" />
      </SecondSection>
      <ThirdSection>
        <H3>{section3.label}</H3>
        <CardBox>
          {section3.cards.map(({ title, text, image }) => (
            <SolutionComponent title={title} text={text} cardImgSrc={image} />
          ))}
        </CardBox>
        <H3>{section3.label2}</H3>
        <ImgBox>
          <img src={section3Img2} alt="section3 screenshot2" />
          <img src={section3Img1} alt="section3 screenshot1" />
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
