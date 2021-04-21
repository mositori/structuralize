import { useTheme } from '@geist-ui/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { SIDEBAR } from 'constants/app';
import { AppLayoutProvider } from './AppLayoutContext';

interface Props {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: Props) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppLayoutProvider defaultSidebarWidth={SIDEBAR.DEFAULT_WIDTH}>{children}</AppLayoutProvider>
    </ThemeProvider>
  );
}
