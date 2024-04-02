import { HasCreatedAt } from '@/domain/models/createdAt';
import { Notification } from '@/domain/models/notification';
import { User } from '@/domain/models/user';
import { z } from 'zod';

export const NotificationHistory = z
  .object({
    notification: Notification,
    user: User,
  })
  .merge(HasCreatedAt);
export type NotificationHistory = z.infer<typeof NotificationHistory>;

// DTO
export const NotificationHistoryDto = NotificationHistory;
export type NotificationHistoryDto = z.infer<typeof NotificationHistoryDto>;

// DTO: Create
export const CreateNotificationHistoryDto = NotificationHistory.omit({ createdAt: true });
export type CreateNotificationHistoryDto = z.infer<typeof CreateNotificationHistoryDto>;
