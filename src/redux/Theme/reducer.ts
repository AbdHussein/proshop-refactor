import { ThemeConstants } from './constant';
import { ToggleThemeAction } from './types';

const initialState = localStorage.getItem('theme') || 'light';

export const ThemeReducer = (
  state = initialState,
  action: ToggleThemeAction,
) => {
  switch (action.type) {
    case ThemeConstants.TOGGLE_THEME:
      return action.payload;
    default:
      return state;
  }
};
