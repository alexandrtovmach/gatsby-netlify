import React from 'react';
import styled from 'styled-components';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { menuSelector } from '@szhsin/react-menu/style-utils';
import { Link } from 'gatsby';
import CustomIcon from './CustomIcon';
import { Strong, SecondaryP } from './Typography';

const DropdownLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
  display: flex;

  &:hover {
    color: #2cd19e;
  }
`;
const StyledMenu = styled(Menu)`
  ${menuSelector.name} {
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1rem;
    min-width: 20rem;
    flex-wrap: wrap;
    min-height: 2rem;
  }
`;
const Texts = styled.div`
  margin-left: 1rem;
  color: black;
`;
const ItemTitle = styled(Strong)`
  font-weight: 600;
  font-size: 14px;
  color: inherit;
  cursor: pointer;
`;
const ItemSubTitle = styled(SecondaryP)`
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
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

const StyledMenuItem = styled(MenuItem)`
  span > img {
    background-color: #13273f;
    border-radius: 50%;
    transition: 0.2s;
  }
  &:hover {
    span > img {
      background-color: #2cd19e;
    }
  }
`;
interface DropdownProps {
  buttonText: string;
  dropdownLinks: {
    label: string;
    description?: string;
    link?: string;
    icon?: string;
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
      {dropdownLinks.map(({ label, description, link, icon }) => (
        <StyledMenuItem key={label}>
          <DropdownLink to={link}>
            <CustomIcon src={icon} />
            <Texts>
              <ItemTitle>{label}</ItemTitle>
              {description && <ItemSubTitle>{description}</ItemSubTitle>}
            </Texts>
          </DropdownLink>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  </div>
);

export default DropdownMenu;
