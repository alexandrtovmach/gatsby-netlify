import React from 'react';
import styled from 'styled-components';
import { P, Subtitle5 } from './Typography';

const Wrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #dbe3eb;
`;
const Img = styled.div`
  width: 100%;
  height: 14rem;
  background-color: #e7edf3;
  background-image: ${(props) => `url(${props.resource})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;
const Info = styled.div`
  padding: 2rem;
`;
const Title = styled(Subtitle5)`
  margin-bottom: 0.5rem;
`;
interface SolutionComponentProps {
  title: string;
  text: string;
  imageSrc: string;
}
const LinkCard: React.FunctionComponent<SolutionComponentProps> = ({
  title,
  text,
  imageSrc,
}) => (
  <Wrapper>
    <Img resource={imageSrc} />
    <Info>
      <Title>{title}</Title>
      <P>{text}</P>
    </Info>
  </Wrapper>
);

export default LinkCard;
