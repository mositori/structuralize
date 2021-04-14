import Link from 'next/link';
import { AppLayout } from 'layouts';

export default function Home() {
  return (
    <AppLayout>
      <Link href="/home2">Go to tasks</Link>
    </AppLayout>
  );
}
