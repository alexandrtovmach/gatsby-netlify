import React from 'react';
import styled from 'styled-components';
import appStoreBg from '../assets/img/appStoreBg.svg';
import { StyledButton } from './ButtonDefault';

const Button = styled(StyledButton)`
  background-image: url(${appStoreBg});
  width: 150px;
  height: 44.1px;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
`;
const ButtonAppStore: React.FunctionComponent = () => <Button />;

export default ButtonAppStore;
