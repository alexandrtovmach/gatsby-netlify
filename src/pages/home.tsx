import React from 'react';
import styled from 'styled-components';
import imgItem1 from 'src/assets/img/imgItem1.svg';
import section2Bg from 'src/assets/img/section2_bg.svg';
import section2img from 'src/assets/img/section2img.png';
import homeContent from '../../content/pages/home.yml';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const FirstSection = styled.section`
  /* padding: 6.5em 0 0 8.4em; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  /* flex-wrap: wrap; */
`;
const LeftSideContent = styled.div`
  /* padding-left: 8em;
  padding-top: 10em; */
  padding-left: 5rem;
  flex-basis: 50%;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  line-height: 1.2em;
  margin-top: 1.5em;
`;

const Description = styled.p`
  line-height: 1.2em;
  margin-top: 1.7rem;
`;

const Register = styled.button`
  background-color: rgb(19, 39, 63);
  border-radius: 5px;
  width: 204px;
  height: 48px;
  color: white;
  text-transform: uppercase;
  margin-top: 44px;
`;

const PhoneImage = styled.img`
  /* padding: 25em 23.5em; */
  flex: 0 1 30%;
  margin-bottom: -20%;
`;

const SecondSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 40vh;
`;

const Section2LeftSide = styled(LeftSideContent)``;

const GreenP = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const StyledP = styled.p`
  line-height: 1.6em;
`;

const Section2Img = styled.img`
  flex: 0 1 30%;
  height: 60%;
  width: 30%;
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
    title1: string;
    title2: string;
    title3: string;
    description: string;
    description2: string;
  };
}

const Home: React.FunctionComponent = () => {
  const { section1, section2 } = homeContent as unknown as HomePageContent;
  return (
    <Main>
      <FirstSection>
        <LeftSideContent>
          <Title>
            {section1.title1}&nbsp;
            <span style={{ color: `green` }}>{section1.title2}</span>&nbsp;
            {section1.title3}
          </Title>
          <Description>{section1.description}</Description>
          <Description>{section1.description2}</Description>
          <Description>{section1.description3}</Description>
          <Register>Register Now</Register>
        </LeftSideContent>

        <PhoneImage src={imgItem1} alt="application screnshot" />
      </FirstSection>
      <SecondSection resource={section2Bg}>
        <Section2LeftSide>
          <GreenP>{section2.title1}</GreenP>
          <StyledH2>{section2.title2}</StyledH2>
          <StyledH2>{section2.title3}</StyledH2>
          <StyledP>{section2.description}</StyledP>
          <StyledP>{section2.description2}</StyledP>
        </Section2LeftSide>

        <Section2Img src={section2img} alt="section2 screenshot" />
      </SecondSection>
    </Main>
  );
};

export default Home;
