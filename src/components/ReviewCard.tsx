import React from 'react';
import styled from 'styled-components';
import { SecondaryP, Strong } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 3rem 2rem;
  margin-top: 3rem;
  box-shadow: 0px 0px 31px 2px rgba(34, 60, 80, 0.2);
  @media (max-width: 1200px) {
    flex-basis: 100%;
  }
`;
const Img = styled.img`
  width: 20%;
  margin-right: 1rem;
  border-radius: 50%;
`;
const Top = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const Info = styled.div``;
const Name = styled(Strong)`
  margin-bottom: 0.3rem;
`;
const Review = styled(SecondaryP)`
  line-height: 25px;
  font-weight: 500;
`;
interface ReviewCardProps {
  revierName: string;
  position: string;
  text: string;
  avatar: string;
}
const ReviewCard: React.FunctionComponent<ReviewCardProps> = ({
  revierName,
  position,
  text,
  avatar,
}) => (
  <Wrapper>
    <Top>
      <Img src={avatar} alt="card logo" />
      <Info>
        <Name>{revierName}</Name>
        <SecondaryP>{position}</SecondaryP>
      </Info>
    </Top>
    <Review>{text}</Review>
  </Wrapper>
);

export default ReviewCard;
