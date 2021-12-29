import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 1rem 3rem 0;
  flex: 0 0 30%;
  @media (max-width: 1200px) {
    flex-grow: 1;
  }
`;
const Img = styled.img`
  margin-right: 1.5rem;
`;
const Info = styled.div``;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface SolutionComponentProps {
  title: string;
  text: string;
  cardImgSrc: string;
}
const SolutionComponent: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  text,
  cardImgSrc,
}) => (
  <Wrapper>
    <Img src={cardImgSrc} alt="card logo" />
    <Info>
      <Title>{title}</Title>
      <P>{text}</P>
    </Info>
  </Wrapper>
);

export default SolutionComponent;
