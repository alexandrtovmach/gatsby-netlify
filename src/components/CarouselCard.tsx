import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  flex-basis: 30%;
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
  }
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
`;
const Img = styled.img`
  width: 30%;
  margin-bottom: 2rem;
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
const CarouselCard: React.FunctionComponent<SolutionComponentProps> = ({
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

export default CarouselCard;
