import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import imgItem1 from '../assets/img/imgItem1.svg';
import section2Bg from '../assets/img/section2_bg.svg';
import section2Img from '../assets/img/section2Img.png';
import card1Img from '../assets/img/card1Img.svg';
import card2Img from '../assets/img/card2Img.svg';
import card3Img from '../assets/img/card3Img.svg';
import card4Img from '../assets/img/card4Img.svg';
import card5Img from '../assets/img/card5Img.svg';
import section3Img1 from '../assets/img/section3Img1.svg';
import section3Img2 from '../assets/img/section3Img2.svg';
import section4Img from '../assets/img/section4Img.svg';
import carouselImg1 from '../assets/img/carouselImg1.svg';
import carouselImg2 from '../assets/img/carouselImg2.svg';
import carouselImg3 from '../assets/img/carouselImg3.svg';
import carouselImg4 from '../assets/img/carouselImg4.svg';
import carouselImg5 from '../assets/img/carouselImg5.svg';
import section6Bg from '../assets/img/section6_bg.svg';
import reviewer1Avatar from '../assets/img/reviewer1Avatar.svg';
import reviewer2Avatar from '../assets/img/reviewer2Avatar.svg';
import reviewer3Avatar from '../assets/img/reviewer3Avatar.svg';
import bannerHomePageBg from '../assets/img/bannerHomePageBg.svg';
import homeContent from '../../content/pages/home.yml';
import { GreenTitle, H1, H2, H3, P } from '../components/Typography';
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
  flex-basis: 50%;
  flex-grow: 1;
`;

const GreenP = styled(P)`
  color: green;
  font-weight: bold;
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
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    card3Title: string;
    card3Text: string;
    card4Title: string;
    card4Text: string;
    card5Title: string;
    card5Text: string;
  };
  section4: {
    title: string;
    title2: string;
    title3: string;
    description: string;
  };
  section5: {
    title: string;
    carouselTitle1: string;
    carouselText1: string;
    carouselTitle2: string;
    carouselText2: string;
    carouselTitle3: string;
    carouselText3: string;
    carouselTitle4: string;
    carouselText4: string;
    carouselTitle5: string;
    carouselText5: string;
  };
  section6: {
    label: string;
    description: string;
    reviewer1Name: string;
    reviewer1Position: string;
    review1: string;
    reviewer2Name: string;
    reviewer2Position: string;
    review2: string;
    reviewer3Name: string;
    reviewer3Position: string;
    review3: string;
    bannerLabel: string;
    bannerDescription: string;
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
            <span style={{ color: `green` }}>{section1.title2}</span>&nbsp;
            {section1.title3}
          </H1>
          <Description>{section1.description}</Description>
          <Description>{section1.description2}</Description>
          <Description>{section1.description3}</Description>
          <ButtonDefault text="register now" />
        </LeftSideContent>

        <PhoneImage src={imgItem1} alt="application screnshot" />
      </FirstSection>
      <SecondSection resource={section2Bg}>
        <Section2LeftSide>
          <GreenP>{section2.label}</GreenP>
          <SectionTitle>{section2.title}</SectionTitle>
          <P>{section2.description}</P>
        </Section2LeftSide>
        <Section2Img src={section2Img} alt="section2 screenshot" />
      </SecondSection>
      <ThirdSection>
        <H3>{section3.label}</H3>
        <CardBox>
          <SolutionComponent
            title={section3.card1Title}
            text={section3.card1Text}
            cardImgSrc={card1Img}
          />
          <SolutionComponent
            title={section3.card2Title}
            text={section3.card2Text}
            cardImgSrc={card2Img}
          />
          <SolutionComponent
            title={section3.card3Title}
            text={section3.card3Text}
            cardImgSrc={card3Img}
          />
          <SolutionComponent
            title={section3.card4Title}
            text={section3.card4Text}
            cardImgSrc={card4Img}
          />
          <SolutionComponent
            title={section3.card5Title}
            text={section3.card5Text}
            cardImgSrc={card5Img}
          />
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
            <GreenTitle>{section4.title2}</GreenTitle>
            {section4.title3}
          </SectionTitle>
          <Description>{section4.description}</Description>
          <ButtonDefault text="get started" />
        </Section4LeftSide>
        <Section4Img src={section4Img} alt="section4 screenshot1" />
      </FourthSection>
      <FifthSection>
        <Section5H3>{section5.title}</Section5H3>
        <Carousel
          items={[
            {
              title: section5.carouselTitle1,
              text: section5.carouselText1,
              icon: carouselImg1,
            },
            {
              title: section5.carouselTitle2,
              text: section5.carouselText2,
              icon: carouselImg2,
            },
            {
              title: section5.carouselTitle3,
              text: section5.carouselText3,
              icon: carouselImg3,
            },
            {
              title: section5.carouselTitle4,
              text: section5.carouselText4,
              icon: carouselImg4,
            },
            {
              title: section5.carouselTitle5,
              text: section5.carouselText5,
              icon: carouselImg5,
            },
          ]}
        />
      </FifthSection>
      <SixthSection resource={section6Bg}>
        <H2 style={{ textAlign: `center` }}>{section6.label}</H2>
        <P style={{ textAlign: `center` }}>{section6.description}</P>
        <ReviewBox>
          <ReviewCard
            revierName={section6.reviewer1Name}
            reviewerPosition={section6.reviewer1Position}
            review={section6.review1}
            avatar={reviewer1Avatar}
          />
          <ReviewCard
            revierName={section6.reviewer2Name}
            reviewerPosition={section6.reviewer2Position}
            review={section6.review2}
            avatar={reviewer2Avatar}
          />
          <ReviewCard
            revierName={section6.reviewer3Name}
            reviewerPosition={section6.reviewer3Position}
            review={section6.review3}
            avatar={reviewer3Avatar}
          />
        </ReviewBox>
        <Banner
          bgSrc={bannerHomePageBg}
          label={section6.bannerLabel}
          description={section6.bannerDescription}
        />
      </SixthSection>
    </Main>
  );
};

export default Home;
