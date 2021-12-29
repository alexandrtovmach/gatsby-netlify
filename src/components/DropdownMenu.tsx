import React from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { menuSelector } from '@szhsin/react-menu/style-utils';
import { Link } from 'gatsby';

const DropdownLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
`;
const StyledMenu = styled(Menu)`
  ${menuSelector.name} {
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1rem;
    min-width: 20rem;
  }
`;

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
    label: string;
    description?: string;
    link?: string;
  }[];
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
      {dropdownLinks.map(({ label, description, link }) => (
        <StyledMenuItem>
          <DropdownLink to={link}>
            <LinkTitle>{label}</LinkTitle>
            {description && <LinkDescription>{description}</LinkDescription>}
          </DropdownLink>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  </div>
);

export default DropdownMenu;
