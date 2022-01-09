import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

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
const Img = styled.img`
  width: 7%;
  margin-right: 1rem;
`;
const Title = styled(Subtitle5)``;
interface SolutionComponentProps {
  title: string;
  description: string;
  icon: string;
}
const BenefitCard: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  description,
  icon,
}) => (
  <Wrapper>
    <TopSection>
      <Img src={icon} alt="card logo" />
      <Title>{title}</Title>
    </TopSection>
    <P>{description}</P>
  </Wrapper>
);

export default BenefitCard;
