import React from 'react';
import styled from 'styled-components';
import googlePlayBg from '../assets/img/googlePlayBg.svg';

const Button = styled.button`
  background-image: url(${googlePlayBg});
  border-radius: 5px;
  width: 150px;
  height: 44.1px;
  border: none;
  cursor: pointer;
`;
const ButtonGooglePlay: React.FunctionComponent = () => <Button />;

export default ButtonGooglePlay;
