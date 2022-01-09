import React from 'react';
import styled from 'styled-components';
import ButtonDefault from './ButtonDefault';
import { H2, P, Subtitle5 } from './Typography';
import tick from '../assets/icons/blackTick.svg';

const Wrapper = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  margin: 0 1rem;
  border: 1px solid #dbe3eb;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 4px 30px rgba(194, 206, 219, 0.6);
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
    &:hover {
      transform: none;
    }
  }
`;
const Label = styled(P)`
  text-transform: uppercase;
  color: #2cd19e;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const Info = styled.div`
  border-top: 1px solid #dbe3eb;
  padding: 1rem 0;
  height: 100%;
`;
const Title1 = styled(H2)``;
const Title2 = styled(Subtitle5)`
  margin: 1rem 0 2rem 0;
`;
const Description = styled(P)`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;
const Tick = styled.img`
  margin-right: 1rem;
`;
interface SolutionComponentProps {
  label: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  description3: string;
  description4?: string;
}
const PricingCard: React.FunctionComponent<SolutionComponentProps> = ({
  label,
  title1,
  title2,
  description1,
  description2,
  description3,
  description4,
}) => (
  <Wrapper>
    <Label>{label}</Label>
    <Title1>{title1}</Title1>
    <Title2>{title2}</Title2>
    <Info>
      <Description>
        <Tick src={tick} alt="tick" />
        {description1}
      </Description>
      <Description>
        <Tick src={tick} alt="tick" />
        {description2}
      </Description>
      <Description>
        <Tick src={tick} alt="tick" />
        {description3}
      </Description>
      {description4 && (
        <Description>
          <Tick src={tick} alt="tick" />
          {description4}
        </Description>
      )}
    </Info>
    <ButtonDefault>Choose Plan</ButtonDefault>
  </Wrapper>
);

export default PricingCard;
