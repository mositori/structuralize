import constate from 'constate';
import { useToggle } from 'utils';

export const [AppLayoutProvider, useAppLayoutContext] = constate(
  ({ defaultSidebarCollapsed = false }: { defaultSidebarCollapsed?: boolean }) => {
    const [sidebarCollapsed, toggleSidebar] = useToggle(defaultSidebarCollapsed);
    return { sidebarCollapsed, toggleSidebar };
  },
);
