import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { TextWrap } from 'components/TextWrap';
import { centering } from 'utils/styles';

export const MENU_ITEM_SIZE = 42;
export const MENU_ITEM_MARGIN_X = 16;
export const MENU_ITEM_COLLAPSED_WIDTH = MENU_ITEM_SIZE + MENU_ITEM_MARGIN_X * 2;

interface Props {
  active?: boolean;
  hideLabel?: boolean;
  label: string;
  icon: ReactNode;
  href: string;
}
function _MenuItem({ active = false, hideLabel, label, icon, href }: Props) {
  return (
    <Container>
      <Link href={href}>
        <MenuItemLink active={active}>
          <MenuIconWrapper>{icon}</MenuIconWrapper>
          <MenuItemText ellipsis={1} weight={500} show={!hideLabel}>
            {label}
          </MenuItemText>
        </MenuItemLink>
      </Link>
      <MenuItemIndicator active={active} />
    </Container>
  );
}

export const MenuItem = React.memo(_MenuItem);

const Container = styled.div`
  position: relative;
`;

const MenuItemLink = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  min-height: ${MENU_ITEM_SIZE}px;
  margin: 0 ${MENU_ITEM_MARGIN_X}px;
  cursor: pointer;
  border-radius: ${(p) => p.theme.layout.radius};
  transition: background-color 0.2s;

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.palette.accents_2};
      box-shadow: 0 0 0 2px ${theme.palette.successLighter};
    `}

  :hover {
    background-color: ${({ theme }) => theme.palette.successLighter};
  }
`;

const MenuItemText = styled(TextWrap)<{ show: boolean }>`
  flex: 1;
  color: ${(p) => p.theme.palette.accents_6} !important;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: color 0.2s, opacity 0.2s;

  ${Container}:hover & {
    color: ${(p) => p.theme.palette.accents_8} !important;
  }
`;

const MenuIconWrapper = styled.div`
  flex: none;
  width: ${MENU_ITEM_SIZE}px;
  max-height: ${MENU_ITEM_SIZE}px;
  color: ${(p) => p.theme.palette.accents_4};
  transition: color 0.2s;
  ${centering()}

  ${Container}:hover & {
    color: ${(p) => p.theme.palette.successLight};
  }
`;

const MenuItemIndicator = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 4px;
  margin: 4px 0;
  background-color: ${(p) => p.theme.palette.successLight};

  border-radius: 4px 0 0 4px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: background-color 0.2s, opacity 0.2s;

  ${Container}:hover & {
    background-color: ${(p) => p.theme.palette.success};
  }
`;
