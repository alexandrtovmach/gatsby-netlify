import React from 'react';
import styled from 'styled-components';
import ButtonAppStore from './ButtonAppStore';
import ButtonGooglePlay from './ButtonGooglePlay';
import { Body2 } from './Typography';

const Wrapper = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: calc(25rem - 4rem);
  border-radius: 40px;
  padding: 4rem 6rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 35%;
`;
const Label = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
  line-height: 42px;
  margin-bottom: 2rem;
`;
const Description = styled(Body2)`
  color: white;
  margin-bottom: 2rem;
`;
interface BannerProps {
  bgSrc: string;
  label: string;
  description: string;
}
const Banner: React.FunctionComponent<BannerProps> = ({
  bgSrc,
  label,
  description,
}) => (
  <Wrapper resource={bgSrc}>
    <Content>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <ButtonAppStore white={false} />
      <ButtonGooglePlay white={false} />
    </Content>
  </Wrapper>
);

export default Banner;
