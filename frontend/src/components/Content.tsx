import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
};

export function Content({ children, subtitle, title, actions }: ContentProps) {
  return (
    <Card>
      <CardContent sx={{ p: 0, pb: '0 !important' }}>
        <Box>
          <Box my={2} p={3}>
            <Stack alignItems={'center'} justifyContent={'space-between'}>
              <Box>
                <Typography variant={'h4'}>{title}</Typography>
                <Typography color={'gray'}>{subtitle}</Typography>
              </Box>
              {actions && <Stack spacing={2}>{actions}</Stack>}
            </Stack>
          </Box>
          <Box>{children}</Box>
        </Box>
      </CardContent>
    </Card>
  );
}
