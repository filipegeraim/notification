import { Table } from '@/components';
import { makeListLogs } from '@/core/factories/make-list-logs';
import { Chip, Stack, Tooltip } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { InfoOutlined as InfoIcon } from '@mui/icons-material';

async function getList() {
  const useCase = makeListLogs();
  return await useCase.perform();
}

export default async function LogsList() {
  const data = await getList();
  return (
    <Table
      getKey={(value) => value.createdAt}
      rows={data}
      columns={[
        { name: 'user.name', title: 'User', minWidth: 250 },
        { name: 'user.phone', title: 'Phone', minWidth: 150 },
        { name: 'user.email', title: 'Email', minWidth: 200 },
        {
          align: 'center',
          name: 'user.category',
          title: 'Channel',
          render: (row) => <Chip label={row.channel.toUpperCase()} />,
          minWidth: 200,
        },
        {
          align: 'center',
          name: 'notification.category',
          title: 'Category',
          render: (row) => <Chip label={row.notification.category.toUpperCase()} />,
          minWidth: 100,
        },
        {
          align: 'right',
          name: 'createdAt',
          title: 'Created At',
          render: (row) => format(parseISO(row.createdAt), 'yyyy-MM-dd HH: mm'),
          minWidth: 150,
        },
        {
          align: 'center',
          name: 'notification.description',
          title: '#',
          render: (row) => (
            <Tooltip title={row.notification.description}>
              <InfoIcon />
            </Tooltip>
          ),
        },
      ]}
    />
  );
}
