import React from 'react';
import styled from 'styled-components';
import { SecondaryP } from './Typography';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0px 12px 30px rgba(129, 129, 165, 0.2);
  background-color: #ffffff;
  border: 1px solid #dbe3eb;
  border-radius: 10px;
  padding: 3rem 2rem;
`;
const Img = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;
interface SolutionComponentProps {
  text: string;
  imageSrc: string;
}
const InstantPaymentCard: React.FunctionComponent<SolutionComponentProps> = ({
  text,
  imageSrc,
}) => (
  <Wrapper>
    <div>
      <Img src={imageSrc} alt="card logo" />
    </div>
    <SecondaryP>{text}</SecondaryP>
  </Wrapper>
);

export default InstantPaymentCard;
