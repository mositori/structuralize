import { ReactNode } from 'react';
import { AppLayoutProvider } from './AppLayoutContext';

interface Props {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
  return <AppLayoutProvider>{children}</AppLayoutProvider>;
}
