import { Category } from '@/domain/models/category';
import type { CreateNotificationDto, NotificationDto } from '@/domain/models/notification';

export const newNotificationTest: CreateNotificationDto = {
  category: Category.FINANCE,
  description: 'Message',
};
export const listNotificationTest: NotificationDto[] = [{ ...newNotificationTest, createdAt: new Date(), id: 1 }];
