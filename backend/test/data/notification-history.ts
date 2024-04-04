import type { CreateNotificationHistoryDto, NotificationHistoryDto } from '@/domain/models/notification-history';
import { listUserTest } from 'test/data/user';
import { listNotificationTest } from 'test/data/notification';
import { Channel } from '@/domain/models/channel';

export const newNotificationHsitoryTest: CreateNotificationHistoryDto = {
  channel: Channel.EMAIL,
  notification: listNotificationTest[0],
  user: listUserTest[0],
};
export const listNotificationHistoryTest: NotificationHistoryDto[] = [
  { ...newNotificationHsitoryTest, createdAt: new Date() },
];
