import { ReactNode, useCallback } from 'react';
import { HandlerProps, ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import styled from 'styled-components';
import { Sidebar } from 'components/Sidebar';
import { useAppLayoutContext } from 'contexts/AppLayoutContext';
import { GlobalBodyFitIntoViewbox } from 'layouts';
import 'react-reflex/styles.css';

interface Props {
  children: ReactNode;
}
export function AppLayout({ children }: Props) {
  const { sidebarWidth, setSidebarWidth } = useAppLayoutContext();
  const handleStopResize = useCallback(
    ({ component }: HandlerProps) => {
      setSidebarWidth(component.props.flex);
    },
    [setSidebarWidth],
  );
  return (
    <Container>
      <GlobalBodyFitIntoViewbox />
      <ReflexContainer orientation="vertical">
        <ReflexElement flex={sidebarWidth} onStopResize={handleStopResize}>
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
