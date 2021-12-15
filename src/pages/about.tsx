import React from 'react';

import Title from '@/components/Title';
import aboutContent from '../../content/pages/about.yml';

interface AboutPageContent {
  docTitle: string;
  section1: {
    title1: string;
    title2: string;
    title3: string;
    description: string;
  };
}

const About: React.FunctionComponent = () => {
  const { section1 } = aboutContent as unknown as AboutPageContent;
  return (
    <main>
      <Title>
        {section1.title1}&nbsp;
        <span style={{ color: `green` }}>{section1.title2}</span>&nbsp;
        {section1.title3}
      </Title>
      <p>{section1.description}</p>
    </main>
  );
};

export default About;
