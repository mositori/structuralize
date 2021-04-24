import { Home } from '@geist-ui/react-icons';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { TextWrap } from 'components/TextWrap';
import { centering } from 'utils/styles';

type MenuItemType = {
  icon: ReactNode;
  label: string;
  href: string;
};

const MENU_ITEMS: MenuItemType[] = [
  {
    icon: <Home />,
    label: 'Dashboard',
    href: '/dashboard',
  },
];

export function Sidebar() {
  return (
    <Container>
      <MenuItemContainer>
        {MENU_ITEMS.map((menuItem) => (
          <Link key={menuItem.label} href={menuItem.href}>
            <MenuItem>
              <MenuIconWrapper>{menuItem.icon}</MenuIconWrapper>
              <MenuItemText ellipsis={1}> {menuItem.label}</MenuItemText>
            </MenuItem>
          </Link>
        ))}
      </MenuItemContainer>
    </Container>
  );
}

const Container = styled.nav`
  height: 100%;
  background-color: ${(p) => p.theme.palette.accents_1};
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
  margin: 0 12px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 4px 12px;

  :hover {
    background-color: ${({ theme }) => theme.palette.successLighter};
  }
`;

const MenuItemText = styled(TextWrap)`
  color: ${(p) => p.theme.palette.accents_6};
`;

const MenuIconWrapper = styled.div`
  flex: none;
  color: ${(p) => p.theme.palette.accents_4};
  ${centering()}

  ${MenuItem}:hover & {
    color: ${(p) => p.theme.palette.successLight};
  }
`;
