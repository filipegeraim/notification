'use client';
import React from 'react';
import { FormContainer, TextFieldElement, SelectElement } from 'react-hook-form-mui';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { SaveOutlined as SaveIcon } from '@mui/icons-material';
import { useNotificationCreate } from '@/app/_views/notification/useNotificationCreate';

export default function NotificationCreate({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { form, onSubmit, options, isLoading, state } = useNotificationCreate();

  React.useEffect(() => {
    if (state.status === 'success') {
      onClose();
    }
  }, [onClose, state]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true}>
      <DialogTitle>Create a new notification</DialogTitle>
      <DialogContent>
        <FormContainer formContext={form}>
          <Stack direction={'column'}>
            <TextFieldElement multiline rows={5} name="description" label="Description" />
            <SelectElement
              name="category"
              valueKey={'value'}
              labelKey={'label'}
              options={options}
              label={'Category'}
              required
            />
            {state.status === 'error' && <Alert>{state.message}</Alert>}
          </Stack>
        </FormContainer>
      </DialogContent>
      <DialogActions>
        <Button variant={'text'} onClick={onClose}>
          Close
        </Button>
        <Button disabled={isLoading} startIcon={<SaveIcon />} onClick={form.handleSubmit(onSubmit)}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
