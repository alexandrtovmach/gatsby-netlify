import React from 'react';
import styled from 'styled-components';
import appStoreBg from '../assets/img/appStoreBg.svg';
import appStoreBgWhite from '../assets/img/appStoreBgWhite.svg';
import { StyledButton } from './ButtonDefault';

const BlackButton = styled(StyledButton)`
  background-image: url(${appStoreBg});
  width: 150px;
  height: 44.1px;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const WhiteButton = styled(StyledButton)`
  background-image: url(${appStoreBgWhite});
  width: 128px;
  height: 38px;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
`;

interface ButtonProps {
  white?: boolean;
}
const ButtonAppStore: React.FunctionComponent<ButtonProps> = ({ white }) =>
  white ? <WhiteButton /> : <BlackButton />;

export default ButtonAppStore;
