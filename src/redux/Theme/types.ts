import { ThemeConstants } from './constant';

export type Itheme = 'light' | 'dark';

export interface ToggleThemeAction {
  type: ThemeConstants.TOGGLE_THEME;
  payload: 'light' | 'dark';
}
