import { Components, Theme, createTheme } from '@mui/material';

export const createComponents = (): Components<Omit<Theme, 'components'>> => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'unset',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        'textTransform': 'none',
        'boxShadow': 'none',
        ':hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiChip: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      label: {
        fontWeight: 500,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
      fullWidth: true,
    },
  },
  MuiDialogTitle: {
    defaultProps: {
      component: 'h5',
      variant: 'h5',
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        margin: '15px 0',
        paddingTop: '10px !important',
      },
    },
  },
  MuiDialogActions: {
    defaultProps: {
      sx: {
        px: 3,
        pb: 3,
      },
    },
  },
  MuiStack: {
    defaultProps: {
      spacing: 2,
      direction: 'row',
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h5',
      },
      subheaderTypographyProps: {
        variant: 'body2',
      },
    },
  },
  MuiFormLabel: {
    defaultProps: {
      sx: { mb: 1, display: 'block' },
    },
    styleOverrides: {
      root: {
        fontSize: 15,
      },
    },
  },
});
