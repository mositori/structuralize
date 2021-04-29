import { Button } from '@geist-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import { useAppLayoutContext } from 'contexts/AppLayoutContext';
import { AppLayout } from 'layouts';

export default function Home() {
  const { sidebarCollapsed, toggleSidebar } = useAppLayoutContext();

  return (
    <AppLayout sidebarCollapsed={sidebarCollapsed} onSidebarToggled={toggleSidebar}>
      <Link href="/home2">Go to tasks</Link>
      <StyledButton type="secondary-light" />
    </AppLayout>
  );
}

const StyledButton = styled(Button)`
  border-radius: 50px;
`;
