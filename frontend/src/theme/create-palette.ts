import { PaletteOptions } from '@mui/material';

export type PaletteType = {
  primary: string;
  secondary: string;
  text: string;
  background: {
    paper: string;
    body: string;
    light: string;
  };
};

export const palette: PaletteType = {
  primary: '#fca311',
  secondary: '#14213d',
  text: '#14213d',
  background: {
    paper: '#fff',
    body: '#f8f9fa',
    light: 'rgb(145 158 171 / 16%)',
  },
};

export const createPalette = (): PaletteOptions => ({
  mode: 'light',
  primary: {
    main: palette.primary,
  },
  text: {
    primary: palette.text,
  },
  background: {
    paper: palette.background.paper,
    default: palette.background.body,
  },
});
