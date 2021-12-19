import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(17.5rem - 1.8rem);
  height: calc(22rem - 2.8rem);
  justify-content: flex-start;
  background-color: #f2f4f7;
  border-radius: 10px;
  padding: 2.8rem 1.8rem;
  margin-top: 3.8rem;
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
