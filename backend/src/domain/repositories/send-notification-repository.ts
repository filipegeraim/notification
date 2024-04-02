import type { NotificationDto } from '@/domain/models/notification';
import type { UserDto } from '@/domain/models/user';

export interface SendNotificationRepository {
  send(notification: NotificationDto, users: UserDto[]): Promise<void>;
}
