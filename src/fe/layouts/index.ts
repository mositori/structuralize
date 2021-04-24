import { createGlobalStyle } from 'styled-components';

export * from './AppLayout';

export const GlobalBodyFitIntoViewbox = createGlobalStyle`
    body {
        /* MEMO: !important付けないとCustom theme時にOverloadされる */
        position: fixed !important;
        inset: 0;
    }

    #__next {
        height: 100%;
    }
`;
