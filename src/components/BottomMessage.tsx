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
`;
const LowerText = styled(P)`
  font-size: 18px;
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
    <H2>
      {title1}&nbsp;
      <span className="accent-text">{title2}</span>
      &nbsp;
    </H2>
    <LowerText>{text}</LowerText>
    <ButtonDefault>GET IN TOUCH</ButtonDefault>
  </LowerTextBox>
);

export default BottomMessage;
