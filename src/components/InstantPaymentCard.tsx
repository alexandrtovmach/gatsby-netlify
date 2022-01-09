import React from 'react';
import styled from 'styled-components';
import TickIcon from '../assets/icons/tickIcon.svg';
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
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
`;
const Tick = styled(TickIcon)`
  width: 2rem;
  margin-right: 1rem;
`;
interface SolutionComponentProps {
  text: string;
}
const InstantPaymentCard: React.FunctionComponent<SolutionComponentProps> = ({
  text,
}) => (
  <Wrapper>
    <div>
      <Tick />
    </div>
    <SecondaryP>{text}</SecondaryP>
  </Wrapper>
);

export default InstantPaymentCard;
