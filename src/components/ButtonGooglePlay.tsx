import React from 'react';
import styled from 'styled-components';
import googlePlayBg from '../assets/img/googlePlayBg.svg';
import googlePlayBgWhite from '../assets/img/googlePlayBgWhite.svg';
import { StyledButton } from './ButtonDefault';

const BlackButton = styled(StyledButton)`
  background-image: url(${googlePlayBg});
  width: 150px;
  height: 44.1px;
  border: none;
  cursor: pointer;
`;

const WhiteButton = styled(StyledButton)`
  background-image: url(${googlePlayBgWhite});
  width: 128px;
  height: 38px;
  border: none;
  cursor: pointer;
`;
interface ButtonProps {
  white: boolean;
}
const ButtonGooglePlay: React.FunctionComponent<ButtonProps> = ({ white }) =>
  white ? <WhiteButton /> : <BlackButton />;

export default ButtonGooglePlay;
