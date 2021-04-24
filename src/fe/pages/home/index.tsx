import { Button, useAllThemes } from '@geist-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import { useAppLayoutContext } from 'contexts/AppLayoutContext';
import { AppLayout } from 'layouts';

export default function Home() {
  const { sidebarWidth, setSidebarWidth } = useAppLayoutContext();
  return (
    <AppLayout sidebarWidth={sidebarWidth} onSidebarStopResize={setSidebarWidth}>
      <Link href="/home2">Go to tasks</Link>
      <StyledButton type="secondary-light" />
    </AppLayout>
  );
}

const StyledButton = styled(Button)`
  border-radius: 50px;
`;
