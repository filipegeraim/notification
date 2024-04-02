import { ro } from 'date-fns/locale';
import type { TableProps } from './types';
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ErrorOutline as ErrorIcon } from '@mui/icons-material';

function TableInternal<T = any>({ columns = [], rows = [], getKey }: TableProps<T>) {
  function get(row: any, path: string) {
    return path.split('.').reduce((obj, key) => obj?.[key], row);
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell component={'th'} key={index} align={col.align ? col.align : 'left'}>
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} align={'center'}>
                <Box p={7}>
                  <Stack direction={'column'} alignItems={'center'}>
                    <ErrorIcon sx={{ fontSize: 30 }} />
                    <Typography>No Data</Typography>
                  </Stack>
                </Box>
              </TableCell>
            </TableRow>
          )}
          {rows?.map((row: T) => (
            <TableRow key={getKey(row)}>
              {columns.map((col, index) => (
                <TableCell
                  component={'td'}
                  key={index}
                  align={col.align ? col.align : 'left'}
                  style={{ minWidth: col.minWidth ? col.minWidth : 'auto' }}
                >
                  {col.render ? col.render(row) : <>{get(row, col.name)}</>}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableInternal;
