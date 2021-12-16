import React from 'react';
import styled from 'styled-components';
import imgItem1 from 'src/assets/img/imgItem1.svg';
import section2Bg from 'src/assets/img/section2_bg.svg';
import aboutContent from '../../content/pages/home.yml';

const Main = styled.main`
  background-color: rgb(244, 247, 249);
`;

const FirstSection = styled.section`
  padding: 6.5em 8.4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftSideContent = styled.div`
  width: 50%;
  margin-top: 3em;
`;

const Title = styled.h1`
  font-size: 50px;
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
const RightSideContent = styled.div`
  width: 50%;
`;
const PhoneImage = styled.div`
  padding: 25em 23.5em;
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  overflow: visible;
`;

const SecondSection = styled.section`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 430px;
  margin-top: -15.5em;
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
}
interface HomePageContentSection2 {
  section2: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    description2: string;
  };
}
const Home: React.FunctionComponent = () => {
  const { section1 } = aboutContent as unknown as HomePageContent;
  const { section2 } = aboutContent as unknown as HomePageContentSection2;
  return (
    <Main>
      <FirstSection>
        <LeftSideContent>
          <Title>
            {section1.title1}&nbsp;
            <span style={{ color: `green` }}>{section1.title2}</span>&nbsp;
            {section1.title3}
          </Title>
          <p>{section1.description}</p>
          <p>{section1.description2}</p>
          <p>{section1.description3}</p>
          <Register>Register Now</Register>
        </LeftSideContent>
        <RightSideContent>
          <PhoneImage resource={imgItem1} />
        </RightSideContent>
      </FirstSection>
      <SecondSection resource={section2Bg}>
        <p>{section2.title1}</p>
        <h2>{section2.title2}</h2>
        <h2>{section2.title3}</h2>
        <p>{section2.description}</p>
        <p>{section2.description2}</p>
      </SecondSection>
    </Main>
  );
};

export default Home;
