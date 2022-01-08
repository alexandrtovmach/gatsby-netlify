import React from 'react';
import styled from 'styled-components';
import ButtonAppStore from './ButtonAppStore';
import ButtonGooglePlay from './ButtonGooglePlay';
import { P } from './Typography';

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
  @media (max-width: 1200px) {
    height: auto;
    padding: 2.5rem 2rem;
    background-position: left;
  }
`;

const Content = styled.div`
  width: 35%;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Label = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
  line-height: 42px;
  margin-bottom: 2rem;
`;
const Description = styled(P)`
  color: white;
  margin-bottom: 2rem;
`;

const Buttons = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
interface BannerProps {
  bgSrc: string;
  label: string;
  description: string;
  appStoreButtonUrl: string;
  googlePlayButtonUrl: string;
}
const Banner: React.FunctionComponent<BannerProps> = ({
  bgSrc,
  label,
  description,
  appStoreButtonUrl,
  googlePlayButtonUrl,
}) => (
  <Wrapper resource={bgSrc}>
    <Content>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <Buttons>
        <a target="_blank" href={appStoreButtonUrl} rel="noreferrer">
          <ButtonAppStore />
        </a>
        <a target="_blank" href={googlePlayButtonUrl} rel="noreferrer">
          <ButtonGooglePlay />
        </a>
      </Buttons>
    </Content>
  </Wrapper>
);

export default Banner;
