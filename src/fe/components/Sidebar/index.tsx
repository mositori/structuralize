import { Home } from '@geist-ui/react-icons';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { TextWrap } from 'components/TextWrap';
import { centering } from 'utils/styles';

type MenuItemType = {
  icon: ReactNode;
  label: string;
};

const MENU_ITEMS: MenuItemType[] = [
  {
    icon: <Home />,
    label: 'Dashboard',
  },
];

export function Sidebar() {
  return (
    <Container>
      <MenuItemContainer>
        {MENU_ITEMS.map((menuItem) => (
          <MenuItem key={menuItem.label}>
            <IconWrapper>{menuItem.icon}</IconWrapper>
            <TextWrap ellipsis={1}>{menuItem.label}</TextWrap>
          </MenuItem>
        ))}
      </MenuItemContainer>
    </Container>
  );
}

const Container = styled.nav``;

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
    background-color: ${({ theme }) => theme.palette.cyanLight};
  }
`;

const IconWrapper = styled.div`
  flex: none;
  ${centering()}
`;
