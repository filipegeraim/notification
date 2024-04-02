import { Category } from '@/domain/models/category';
import { HasCreatedAt } from '@/domain/models/createdAt';
import { HasId } from '@/domain/models/id';
import { z } from 'zod';

export const Notification = z
  .object({
    category: z.nativeEnum(Category),
    description: z.string().min(1, 'Description is required'),
  })
  .merge(HasId)
  .merge(HasCreatedAt);

export type Notification = z.infer<typeof Notification>;

// DTO
export const NotificationDto = Notification;
export type NotificationDto = z.infer<typeof NotificationDto>;

// DTO: Create
export const CreateNotificationDto = Notification.omit({ id: true, createdAt: true });
export type CreateNotificationDto = z.infer<typeof CreateNotificationDto>;
