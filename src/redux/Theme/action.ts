import { ToggleThemeAction, Itheme } from './types';
import { ThemeConstants } from './constant';

export const toggleTheme = (theme: Itheme): ToggleThemeAction => {
  localStorage.setItem('theme', theme);
  return {
    type: ThemeConstants.TOGGLE_THEME,
    payload: theme,
  };
};
