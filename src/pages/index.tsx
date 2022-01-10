import React from 'react';
import homeContent from '../../content/pages/home.yml';
import Main from '../containers/Layout';
import HomeContainer from '@/containers/Home';

export interface HomePageContent {
  section1: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
    description2: string;
    description3: string;
    button: {
      label: string;
      url: string;
    };
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
    button: {
      label: string;
      url: string;
    };
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
    appStoreButton: {
      url: string;
    };
    googlePlayButton: {
      url: string;
    };
    lowerTitle1: string;
    lowerTitle2: string;
    lowerTitle3: string;
    lowerText: string;
    button: {
      label: string;
      url: string;
    };
  };
}

const Home: React.FunctionComponent = () => {
  const { section1, section2, section3, section4, section5, section6 } =
    homeContent as unknown as HomePageContent;
  return (
    <Main>
      <HomeContainer
        content={{ section1, section2, section3, section4, section5, section6 }}
      />
    </Main>
  );
};

export default Home;
