import { Themes } from '@geist-ui/react';
import { GeistUserTheme } from 'utils';

export const SIDEBAR = {
  DEFAULT_COLLAPSED: false,
} as const;

const APP_LIGHT_THEME_ID = 'app_light';
export const APP_THEMES = {
  LIGHT: {
    ID: APP_LIGHT_THEME_ID,
    THEME: Themes.createFromLight({
      type: APP_LIGHT_THEME_ID,
      font: {
        mono: 'Ubuntu',
        sans: 'Ubuntu',
      },
      layout: {
        radius: '4px',
      },
    } as GeistUserTheme),
  },
} as const;
