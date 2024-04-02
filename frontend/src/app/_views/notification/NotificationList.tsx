import { Table } from '@/components';
import { makeListNotification } from '@/core/factories/make-list-notification';
import { Chip } from '@mui/material';
import { format, parseISO } from 'date-fns';

async function getList() {
  const useCase = makeListNotification();
  return await useCase.perform();
}

export default async function NotificationList() {
  const data = await getList();
  return (
    <Table
      getKey={(value) => value.id}
      rows={data}
      columns={[
        { name: 'id', title: 'ID', minWidth: 100 },
        { name: 'description', title: 'Description', minWidth: 100 },
        {
          align: 'center',
          name: 'category',
          title: 'Category',
          render: (row) => <Chip label={row.category.toUpperCase()} />,
          minWidth: 150,
        },
        {
          align: 'right',
          name: 'createdAt',
          title: 'Created At',
          render: (row) => format(parseISO(row.createdAt), 'yyyy-MM-dd HH: mm'),
          minWidth: 150,
        },
      ]}
    />
  );
}
