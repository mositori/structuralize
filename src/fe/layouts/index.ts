import { createGlobalStyle } from 'styled-components';

export * from './AppLayout';

export const GlobalBodyFitIntoViewbox = createGlobalStyle`
    body {
        position: fixed;
        inset: 0;
    }

    #__next {
        height: 100%;
    }
`;
