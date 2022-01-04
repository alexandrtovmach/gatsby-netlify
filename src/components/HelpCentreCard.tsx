import React from 'react';
import styled from 'styled-components';
import { Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  min-width: 300px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 40px rgba(108, 108, 138, 0.2);
  }
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
`;
const ImgWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 3rem;
  border: 1px solid #dbe3eb;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
`;
const Title = styled(Subtitle5)`
  margin-top: 1rem;
`;
interface SolutionComponentProps {
  imageSrc: string;
  label: string;
}
const HelpCentreCard: React.FunctionComponent<SolutionComponentProps> = ({
  imageSrc,
  label,
}) => (
  <Wrapper>
    <ImgWrapper>
      <Img src={imageSrc} alt="card logo" />
      <Title>{label}</Title>
    </ImgWrapper>
  </Wrapper>
);

export default HelpCentreCard;
