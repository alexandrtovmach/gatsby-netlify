import React from 'react';
import styled from 'styled-components';
import googlePlayBg from '../assets/img/googlePlayBg.svg';
import { StyledButton } from './ButtonDefault';

const Button = styled(StyledButton)`
  background-image: url(${googlePlayBg});
  width: 150px;
  height: 44.1px;
  border: none;
  cursor: pointer;
`;
const ButtonGooglePlay: React.FunctionComponent = () => <Button />;

export default ButtonGooglePlay;
