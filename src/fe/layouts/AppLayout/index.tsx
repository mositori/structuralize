import { ReactNode, useEffect, useState } from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import styled, { css } from 'styled-components';
import { GlobalBodyFitIntoViewbox } from 'layouts';
import { Sidebar, MENU_ITEM_COLLAPSED_WIDTH } from 'layouts/AppLayout/Sidebar';
import 'react-reflex/styles.css';

interface Props {
  children: ReactNode;
  sidebarCollapsed: boolean;
  onSidebarToggled: () => void;
}

export function AppLayout({ children, sidebarCollapsed, onSidebarToggled }: Props) {
  const [size, setSize] = useState(sidebarCollapsed ? MENU_ITEM_COLLAPSED_WIDTH : 240);

  useEffect(() => {
    setSize(sidebarCollapsed ? MENU_ITEM_COLLAPSED_WIDTH : 240);
  }, [sidebarCollapsed]);

  return (
    <Container>
      <GlobalBodyFitIntoViewbox />
      <ReflexContainer orientation="vertical" windowResizeAware={true}>
        <AnimatedReflexElement size={size}>
          <Sidebar collapsed={sidebarCollapsed} onClickCollapse={onSidebarToggled} />
        </AnimatedReflexElement>
        <HiddenReflexSplitter />
        <AnimatedReflexElement>{children}</AnimatedReflexElement>
      </ReflexContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  inset: 0;
`;

const AnimatedReflexElement = styled(ReflexElement)<{ disableAnimation?: boolean }>`
  will-change: flex-grow;
  ${({ disableAnimation = false }) =>
    !disableAnimation &&
    css`
      transition: flex-grow 0.5s ease;
    `}
`;

const HiddenReflexSplitter = styled(ReflexSplitter)`
  visibility: hidden;
`;
