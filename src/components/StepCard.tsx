import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 30%;
  flex-grow: 1;
  justify-content: flex-start;
  border-radius: 10px;
  padding-top: 2rem;
  height: 100%;
  min-width: 300px;
  @media (max-width: 1200px) {
    flex-grow: 1;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background-image: linear-gradient(
    transparent 48%,
    #dbe3eb 50%,
    transparent 52%
  );
`;
const Dot = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: radial-gradient(#2cd19e 17%, white 20%);
  background-color: white;
  box-shadow: 0px 4px 25px rgba(194, 206, 219, 0.86);
  border: none;
  overflow: hidden;
  margin-right: 1rem;
`;
const Info = styled.div``;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
const Label = styled(P)`
  padding: 0.5rem;
  background: white;
  font-weight: 600;
`;
interface SolutionComponentProps {
  label: string;
  title?: string;
  description: string;
}
const StepCard: React.FunctionComponent<SolutionComponentProps> = ({
  label,
  title,
  description,
}) => (
  <Wrapper>
    <TopSection>
      <Dot />
      <Label>{label}</Label>
    </TopSection>

    <Info>
      <Title>{title}</Title>
      <P>{description}</P>
    </Info>
  </Wrapper>
);

export default StepCard;
