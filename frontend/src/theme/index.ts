'use client';
import { createTheme as createThemeMui } from '@mui/material/styles';
import { createTypography } from './create-typografy';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { BorderRadius } from './constants';

const createTheme = () => {
  const palette = createPalette();
  const typography = createTypography();
  const components = createComponents();
  return createThemeMui({
    palette,
    shape: {
      borderRadius: BorderRadius,
    },
    components,
    typography,
  });
};

export const theme = createTheme();
