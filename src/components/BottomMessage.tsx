import React from 'react';
import styled from 'styled-components';
import ButtonDefault from './ButtonDefault';
import { H2, P } from './Typography';

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
const TitleH2 = styled(H2)`
  text-align: center;
`;
const Description = styled(P)`
  width: 60%;
  text-align: center;
  margin: 2rem 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

interface ComponentProps {
  title1: string;
  title2: string;
  text: string;
  button: {
    label: string;
    url: string;
  };
}
const BottomMessage: React.FunctionComponent<ComponentProps> = ({
  title1,
  title2,
  text,
  button,
}) => (
  <LowerTextBox>
    <TitleH2>
      {title1}&nbsp;
      <span className="accent-text">{title2}</span>
      &nbsp;
    </TitleH2>
    <Description>{text}</Description>
    <ButtonDefault to={button.url}>{button.label}</ButtonDefault>
  </LowerTextBox>
);

export default BottomMessage;
