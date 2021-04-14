import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { AppProps } from 'next/app';
import { GlobalContextProvider } from 'contexts';

export function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </GeistProvider>
  );
}

export default App;
