'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form-mui';
import { NotificationForm, CategorySchema } from '@/core/domain/types/notification';
import { createNotification } from '@/app/notification/action';
import { useFormState } from 'react-dom';

export function useNotificationCreate() {
  const form = useForm<NotificationForm>({
    resolver: zodResolver(NotificationForm),
    defaultValues: {
      description: '',
      category: 'sports',
    },
  });
  const [isLoading, startLoading] = React.useTransition();
  const [state, createNotificationAction] = useFormState(createNotification, { status: 'default' });

  const options = React.useMemo(
    () => Object.values(CategorySchema.Values).map((x, i) => ({ key: i, label: x.toUpperCase(), value: x })),
    [],
  );

  function onSubmit(values: NotificationForm) {
    startLoading(async () => {
      await createNotificationAction(values);
    });
  }

  return { form, onSubmit, options, isLoading, state };
}
