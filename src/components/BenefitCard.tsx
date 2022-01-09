import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';
import TickIcon from '../assets/icons/tickIcon.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 2rem 0;
  min-width: 300px;
  @media (max-width: 1200px) {
    flex-grow: 1;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const Tick = styled(TickIcon)`
  margin-right: 1rem;
`;
const Title = styled(Subtitle5)``;
interface SolutionComponentProps {
  title: string;
  description: string;
}
const BenefitCard: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  description,
}) => (
  <Wrapper>
    <TopSection>
      <Tick />
      <Title>{title}</Title>
    </TopSection>
    <P>{description}</P>
  </Wrapper>
);

export default BenefitCard;
