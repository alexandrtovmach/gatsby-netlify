import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  min-width: 300px;
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
`;
const Img = styled.img`
  width: 15%;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    width: 30%;
  }
`;
const Info = styled.div``;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface OpenBankingCardProps {
  title: string;
  text: string;
  cardImgSrc: string;
}
const OpenBankingCard: React.FunctionComponent<OpenBankingCardProps> = ({
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

export default OpenBankingCard;
