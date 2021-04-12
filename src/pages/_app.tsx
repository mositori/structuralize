import { GeistProvider, CssBaseline } from '@geist-ui/react';
// TODO: Fix import resolver
// eslint-disable-next-line
import { AppProps } from 'next/app';

export function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default App;
