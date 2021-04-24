import { Themes } from '@geist-ui/react';
import { GeistUserTheme } from 'utils';

export const SIDEBAR = {
  DEFAULT_WIDTH: 200,
  MIN_WIDTH: 150,
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
    } as GeistUserTheme),
  },
} as const;
