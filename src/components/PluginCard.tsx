import React from 'react';
import styled from 'styled-components';
import { Subtitle5 } from './Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  min-width: 300px;
  @media (max-width: 1200px) {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
`;
const Link = styled.a`
  height: 30%;
`;
const ImgWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 3rem;
  border: 1px solid #dbe3eb;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface SolutionComponentProps {
  title: string;
  imageSrc: string;
  link: string;
}
const PluginCard: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  imageSrc,
  link,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Link target="_blank" href={link} rel="noreferrer">
      <ImgWrapper>
        <Img src={imageSrc} alt="card logo" />
      </ImgWrapper>
    </Link>
  </Wrapper>
);

export default PluginCard;
