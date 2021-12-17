import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import homeContent from '../../content/pages/home.yml';
import { GreenTitle, H1, H2, H3, P } from '../components/Typography';
import SolutionComponent from '../components/SolutionCard';
import ButtonDefault from '@/components/ButtonDefault';

const FirstSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
`;
const LeftSideContent = styled.div`
  padding: 10rem 0 5rem 5rem;
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
  padding-left: 5rem;
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
  padding: 8rem 5rem 8rem 5rem;
`;

const CardBox = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;
`;
const FourthSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 5rem;
`;
const Section4LeftSide = styled.div`
  flex: 0 1 50%;
`;
const Section4Img = styled.img`
  flex: 0 1 50%;
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
}

const Home: React.FunctionComponent = () => {
  const { section1, section2, section3, section4 } =
    homeContent as unknown as HomePageContent;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
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
          <img src={section3Img1} alt="section3 screenshot1" />
          <img src={section3Img2} alt="section3 screenshot2" />
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
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </Main>
  );
};

export default Home;
