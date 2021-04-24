import { ReactNode, useCallback } from 'react';
import { HandlerProps, ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import styled from 'styled-components';
import { SIDEBAR } from 'constants/app';
import { GlobalBodyFitIntoViewbox } from 'layouts';
import { Sidebar } from 'layouts/AppLayout/Sidebar';
import 'react-reflex/styles.css';

interface Props {
  children: ReactNode;
  sidebarWidth: number;
  onSidebarStopResize: (width: number) => void;
}

export function AppLayout({ children, sidebarWidth, onSidebarStopResize }: Props) {
  const handleStopResize = useCallback(
    ({ component }: HandlerProps) => {
      if (!component.ref || typeof component.ref === 'string') {
        console.warn('component.ref is undefined');
        return;
      }
      // TODO: 型をなんとかしたい
      const { width } = (component.ref as any).current.getBoundingClientRect();
      onSidebarStopResize(width);
    },
    [onSidebarStopResize],
  );
  return (
    <Container>
      <GlobalBodyFitIntoViewbox />
      <ReflexContainer orientation="vertical">
        <ReflexElement
          size={sidebarWidth}
          minSize={SIDEBAR.MIN_WIDTH}
          onStopResize={handleStopResize}
        >
          <Sidebar />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement>{children}</ReflexElement>
      </ReflexContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  inset: 0;
`;
