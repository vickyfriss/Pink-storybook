// .storybook/pinkTheme.js
import { create } from 'storybook/theming';

export const pinkTheme = create({
  base: 'light',
  brandTitle: 'My Pink Storybook',
  brandUrl: '/',
  brandImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Barbie_Logo.svg',
  colorPrimary: '#FF69B4',
  colorSecondary: '#ffc0cb',
  appBg: '#fff0f5',
  appContentBg: '#ffe4e1',
  appBorderColor: '#ffb6c1',
  appBorderRadius: 4,
  fontBase: '"Arial", sans-serif',
  fontCode: 'monospace',
});
