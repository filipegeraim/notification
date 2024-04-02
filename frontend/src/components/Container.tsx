import { Box, Container as MuiContainer } from '@mui/material';
import React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <Box minHeight={'100vh'}>
      <MuiContainer component={'main'} maxWidth={'md'} sx={{ p: 5 }}>
        {children}
      </MuiContainer>
    </Box>
  );
}
