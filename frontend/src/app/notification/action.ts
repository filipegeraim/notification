'use server';
import type { NotificationForm } from '@/core/domain/types/notification';
import type { Response } from '@/core/domain/types/response';
import { makeCreateNotification } from '@/core/factories/make-create-notification';
import { revalidatePath } from 'next/cache';

export async function createNotification(state: Response, payload: NotificationForm): Promise<Response> {
  try {
    const useCase = makeCreateNotification();
    await useCase.perform(payload);
    revalidatePath('/notification');
    return { message: 'Saved successfully', status: 'success' };
  } catch (err) {
    return { message: 'An error occurred while creating a notification.', status: 'error' };
  }
}
