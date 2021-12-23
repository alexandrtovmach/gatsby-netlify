import React from 'react';
import styled from 'styled-components';
import { Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;
const ImgWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 3rem;
  border: 1px solid #dbe3eb;
  height: 100%;
  margin-right: 5rem;
`;
const Img = styled.img`
  width: 100%;
`;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface SolutionComponentProps {
  title: string;
  imageSrc: string;
}
const PluginCard: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  imageSrc,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <ImgWrapper>
      <Img src={imageSrc} alt="card logo" />
    </ImgWrapper>
  </Wrapper>
);

export default PluginCard;
