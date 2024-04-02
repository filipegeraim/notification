'use client';
import React from 'react';
import NotificationCreate from '@/app/_views/notification/NotificationCreate';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AddOutlined as AddIcon } from '@mui/icons-material';

export default function NotificationAction() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button variant={'outlined'} onClick={() => router.push('/logs')}>
        Logs
      </Button>
      <Button startIcon={<AddIcon />} onClick={handleOpen}>
        New Notification
      </Button>
      {open && <NotificationCreate open={open} onClose={handleClose} />}
    </>
  );
}
