import { GeistUIThemes } from '@geist-ui/react';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends GeistUIThemes {}
}
