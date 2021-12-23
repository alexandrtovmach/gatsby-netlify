import React from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { menuSelector } from '@szhsin/react-menu/style-utils';
import '@szhsin/react-menu/dist/core.css';
import { Link } from 'gatsby';
// import dropdownIcon1 from '../assets/img/dropdownIcon1.svg';

const DropdownLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
`;
const StyledMenu = styled(Menu)`
  ${menuSelector.name} {
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 50px;
    width: 30rem;
  }
`;
// const Icon = styled.div`
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
// `;

const LinkTitle = styled.p`
  font-size: 13px;
  line-height: 30px;
  font-weight: 600;
  color: #13273f;
`;
const LinkDescription = styled(LinkTitle)`
  font-weight: 500;
  color: #495b6c;
`;
const StyledMenuButton = styled(MenuButton)`
  font-family: 'montserrat';
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  transition: 200ms;
  color: black;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: #2cd19e;
  }
`;
const StyledMenuItem = styled(MenuItem)``;
interface DropdownProps {
  buttonText: string;
  dropdownLinks: {
    link1: string;
    description1: string;
    link2: string;
    description2: string;
    link3: string;
    description3: string;
    link4: string;
    description4: string;
    link5: string;
    description5: string;
    link6: string;
    description6: string;
  };
}

const DropdownMenu: React.FunctionComponent<DropdownProps> = ({
  buttonText,
  dropdownLinks,
}) => (
  <div>
    <StyledMenu
      transition
      menuButton={<StyledMenuButton>{buttonText}</StyledMenuButton>}
    >
      <StyledMenuItem>
        <DropdownLink to="/accept-payments-account-to-account-payment">
          {/* <Icon>
          <img src={dropdownIcon1} alt="icon" />
        </Icon> */}
          <LinkTitle>{dropdownLinks.link1}</LinkTitle>
          <LinkDescription>{dropdownLinks.description1}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <DropdownLink to="/Accept-payments-ecommerce-and-online-payments">
          <LinkTitle>{dropdownLinks.link2}</LinkTitle>
          <LinkDescription>{dropdownLinks.description2}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <DropdownLink to="/">
          <LinkTitle>{dropdownLinks.link3}</LinkTitle>
          <LinkDescription>{dropdownLinks.description3}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <DropdownLink to="/">
          <LinkTitle>{dropdownLinks.link4}</LinkTitle>
          <LinkDescription>{dropdownLinks.description4}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <DropdownLink to="/">
          <LinkTitle>{dropdownLinks.link5}</LinkTitle>
          <LinkDescription>{dropdownLinks.description5}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <DropdownLink to="/">
          <LinkTitle> {dropdownLinks.link6} </LinkTitle>
          <LinkDescription>{dropdownLinks.description6}</LinkDescription>
        </DropdownLink>
      </StyledMenuItem>
    </StyledMenu>
  </div>
);

export default DropdownMenu;
