import { Notification } from '@/core/domain/types/notification';

export interface NotificationRepository {
  list(): Promise<Notification[]>;
  create(description: string, category: string): Promise<void>;
}
