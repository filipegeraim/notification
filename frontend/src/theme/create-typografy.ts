import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const createTypography = (): TypographyOptions => ({
  fontFamily: roboto.style.fontFamily,
  body1: {
    fontSize: '0.9rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  body2: {
    fontSize: '0.775rem',
    fontWeight: 400,
    lineHeight: 1.47,
  },
  button: {
    fontWeight: 600,
    fontSize: '0.775rem',
  },
  caption: {
    fontSize: '0.65rem',
    fontWeight: 500,
    lineHeight: 1.56,
  },
  subtitle1: {
    fontSize: '0.9rem',
    fontWeight: 500,
    lineHeight: 1.47,
  },
  subtitle2: {
    fontSize: '0.775rem',
    fontWeight: 500,
    lineHeight: 1.47,
  },
  overline: {
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: 2.4,
    textTransform: 'uppercase',
  },
  h1: {
    fontWeight: 700,
    fontSize: '3rem',
    lineHeight: 1.1,
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.1,
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.1,
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.1,
  },
  h5: {
    fontWeight: 700,
    fontSize: '1.0rem',
    lineHeight: 1.1,
  },
  h6: {
    fontWeight: 700,
    fontSize: '0.625rem',
    lineHeight: 1.2,
  },
});
