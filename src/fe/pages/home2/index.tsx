import Link from 'next/link';
import { useAppLayoutContext } from 'contexts/AppLayoutContext';
import { AppLayout } from 'layouts';

export default function Home() {
  const { sidebarWidth, setSidebarWidth } = useAppLayoutContext();
  return (
    <AppLayout sidebarWidth={sidebarWidth} onSidebarStopResize={setSidebarWidth}>
      <Link href="/home">Go to tasks</Link>
    </AppLayout>
  );
}
