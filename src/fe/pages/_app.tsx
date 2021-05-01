import { CssBaseline, GeistProvider, useTheme } from '@geist-ui/react';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { APP_THEMES, SIDEBAR } from 'constants/app';
import { AppLayoutProvider } from 'contexts';

// reset cssとfontsource
import 'ress';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

/**
 * GeistUI周りのProvider
 */
function AppGeistProvider({ children }: { children: ReactNode }) {
  return (
    <GeistProvider themes={[APP_THEMES.LIGHT.THEME]} themeType={APP_THEMES.LIGHT.ID}>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}

/**
 * styled-componentや独自のContextのProviderはここ。
 */
function AppProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppLayoutProvider defaultSidebarCollapsed={SIDEBAR.DEFAULT_COLLAPSED}>
        {children}
      </AppLayoutProvider>
    </ThemeProvider>
  );
}

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppGeistProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AppGeistProvider>
  );
}

export default App;
