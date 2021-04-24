import { Themes, GeistUIThemes } from '@geist-ui/react';

export function unreachable(msg?: string) {
  throw new Error(msg);
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type GeistUserTheme = DeepPartial<GeistUIThemes> & {
  type: string;
};
