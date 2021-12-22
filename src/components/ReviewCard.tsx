import React from 'react';
import styled from 'styled-components';
import { Body3, Body4, Body5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(23rem - 1.8rem);
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 2.8rem 1.8rem;
  margin-top: 3.8rem;
  box-shadow: 0px 0px 31px 2px rgba(34, 60, 80, 0.2);
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
const Name = styled(Body5)`
  margin-bottom: 0.3rem;
`;
const Position = styled(Body4)`
  color: gray;
`;
const Review = styled(Body3)`
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
        <Position>{position}</Position>
      </Info>
    </Top>
    <Review>{text}</Review>
  </Wrapper>
);

export default ReviewCard;
