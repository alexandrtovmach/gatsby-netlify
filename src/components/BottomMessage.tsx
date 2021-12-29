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
  justify-content: space-around;
  @media (max-width: 1200px) {
    height: auto;
  }
`;
const TitleH2 = styled(H2)`
  text-align: center;
`;
const LowerText = styled(P)`
  font-size: 18px;
  width: 60%;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    margin: 2rem 0;
    width: 100%;
  }
`;

interface ComponentProps {
  title1: string;
  title2: string;
  text: string;
}
const BottomMessage: React.FunctionComponent<ComponentProps> = ({
  title1,
  title2,
  text,
}) => (
  <LowerTextBox>
    <TitleH2>
      {title1}&nbsp;
      <span className="accent-text">{title2}</span>
      &nbsp;
    </TitleH2>
    <LowerText>{text}</LowerText>
    <ButtonDefault>GET IN TOUCH</ButtonDefault>
  </LowerTextBox>
);

export default BottomMessage;
