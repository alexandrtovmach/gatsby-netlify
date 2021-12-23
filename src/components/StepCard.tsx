import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25rem - 2rem);
  justify-content: flex-start;
  border-radius: 10px;
  padding: 2rem 0;
  height: 100%;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const Img = styled.img`
  width: 25%;
`;
const Info = styled.div``;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface SolutionComponentProps {
  label: string;
  title: string;
  description: string;
  icon: string;
}
const StepCard: React.FunctionComponent<SolutionComponentProps> = ({
  label,
  title,
  description,
  icon,
}) => (
  <Wrapper>
    <TopSection>
      <Img src={icon} alt="card logo" />
      <p>{label}</p>
    </TopSection>

    <Info>
      <Title>{title}</Title>
      <P>{description}</P>
    </Info>
  </Wrapper>
);

export default StepCard;
