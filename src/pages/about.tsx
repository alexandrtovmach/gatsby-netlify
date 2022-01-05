import React from 'react';
import styled from 'styled-components';
import Main from '../containers/Layout';
import aboutPageContent from '../../content/pages/about.yml';
import { Subtitle2 } from '@/components/Typography';
import Section from '@/components/Section';
import bannerBg from '../assets/img/aboutPageBanner.png';

const FirstViewport = styled(Section)``;
const Banner = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: calc(25rem - 4rem);
  border-radius: 40px;
  padding: 4rem 6rem;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    height: auto;
    padding: 2.5rem 2rem;
    background-position: left;
  }
`;

const PageTitle = styled(Subtitle2)`
  color: white;
`;
interface AboutPageContent {
  viewport1: {
    pageTitle: string;
    title2: string;
    title3: string;
    title4: string;
    description1: string;
    description2: string;
    description3: string;
    viewport1Cards: {
      title1: string;
      title2: string;
      description: string;
    }[];
  };
  viewport2: {
    label: string;
    title: string;
    viewport2Cards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport3: {
    title: string;
    viewport3Cards: {
      title: string;
      text: string;
      image: string;
    }[];
  };
  viewport4: {
    bannerLabel: string;
    bannerDescription: string;
    lowerTitle1: string;
    lowerTitle2: string;
    lowerText: string;
  };
}
const About: React.FunctionComponent = () => {
  const { viewport1 } = aboutPageContent as unknown as AboutPageContent;
  return (
    <Main>
      <FirstViewport>
        <Banner resource={bannerBg}>
          <PageTitle>{viewport1.pageTitle}</PageTitle>
        </Banner>
      </FirstViewport>
    </Main>
  );
};

export default About;
