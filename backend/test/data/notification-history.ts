import type { CreateNotificationHistoryDto, NotificationHistoryDto } from '@/domain/models/notification-history';
import { listUserTest } from 'test/data/user';
import { listNotificationTest } from 'test/data/notification';

export const newNotificationHsitoryTest: CreateNotificationHistoryDto = {
  notification: listNotificationTest[0],
  user: listUserTest[0],
};
export const listNotificationHistoryTest: NotificationHistoryDto[] = [
  { ...newNotificationHsitoryTest, createdAt: new Date() },
];
