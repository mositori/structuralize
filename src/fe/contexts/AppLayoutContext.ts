import constate from 'constate';
import { useState } from 'react';

export const [AppLayoutProvider, useAppLayoutContext] = constate(
  ({ defaultSidebarWidth = 0 }: { defaultSidebarWidth?: number }) => {
    const [sidebarWidth, setSidebarWidth] = useState(defaultSidebarWidth);
    return { sidebarWidth, setSidebarWidth };
  },
);
