import type { User } from '@/core/domain/types/user';
import type { Notification } from '@/core/domain/types/notification';

export type Logs = {
  channel: string;
  notification: Notification;
  user: User;
  createdAt: string;
};
