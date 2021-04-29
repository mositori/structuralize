import Link from 'next/link';
import { useAppLayoutContext } from 'contexts/AppLayoutContext';
import { AppLayout } from 'layouts';

export default function Home() {
  const { sidebarCollapsed, toggleSidebar } = useAppLayoutContext();
  return (
    <AppLayout sidebarCollapsed={sidebarCollapsed} onSidebarToggled={toggleSidebar}>
      <Link href="/home">Go to tasks</Link>
    </AppLayout>
  );
}
