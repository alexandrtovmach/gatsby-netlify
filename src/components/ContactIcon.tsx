import React from 'react';
import styled from 'styled-components';

import FacebookSvg from '../assets/icons/facebook.svg';
import InstagramSvg from '../assets/icons/instagram.svg';
import TwitterSvg from '../assets/icons/twitter.svg';
import LinkedinSvg from '../assets/icons/linkedIn.svg';

const Circle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #8181a5;
  color: #13273f;
  margin: 0.25rem;
  transition: 0.4s;

  &:hover {
    color: #2cd19e;
    border: 1px solid #2cd19e;
  }
`;

interface ContactIconProps {
  type: SocialType;
}

const ContactIcon: React.FunctionComponent<ContactIconProps> = ({ type }) => (
  <Circle>
    {type === `facebook` && <FacebookSvg />}
    {type === `instagram` && <InstagramSvg />}
    {type === `linkedin` && <LinkedinSvg />}
    {type === `twitter` && <TwitterSvg />}
  </Circle>
);

export default ContactIcon;
