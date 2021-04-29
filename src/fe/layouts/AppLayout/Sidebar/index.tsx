import { Divider } from '@geist-ui/react';
import { Home, Settings } from '@geist-ui/react-icons';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { MenuItem, MENU_ITEM_COLLAPSED_WIDTH } from './MenuItem';
import { Toggle } from './Toggle';

export { MENU_ITEM_COLLAPSED_WIDTH } from './MenuItem';

type MenuItemType = {
  icon: ReactNode;
  label: string;
  href: string;
};

const DIVIDER_SPACING_X = 1;
const DIVIDER_SPACING_Y = 1;

const MENU_ITEMS: MenuItemType[] = [
  {
    icon: <Home />,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <Settings />,
    label: 'Setting',
    href: '/home',
  },
];

interface Props {
  collapsed: boolean;
  onClickCollapse?: () => void;
}

function _Sidebar({ collapsed, onClickCollapse }: Props) {
  return (
    <Container>
      <ToggleContainer>
        <Toggle onClick={onClickCollapse} />
      </ToggleContainer>
      <Divider x={DIVIDER_SPACING_X} y={DIVIDER_SPACING_Y} />
      <MenuItemContainer>
        {MENU_ITEMS.map((menuItem) => (
          <MenuItem
            key={menuItem.label}
            label={menuItem.label}
            hideLabel={collapsed}
            icon={menuItem.icon}
            href={menuItem.href}
            active={menuItem.label === 'Dashboard'}
          />
        ))}
      </MenuItemContainer>
    </Container>
  );
}

export const Sidebar = React.memo(_Sidebar);

const Container = styled.nav`
  height: 100%;
  padding: 24px 0;
  background-color: ${(p) => p.theme.palette.accents_1};
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: ${MENU_ITEM_COLLAPSED_WIDTH}px;
`;

const MenuItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
