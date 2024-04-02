import type { CreateNotificationDto, NotificationDto } from '@/domain/models/notification';

export interface NotificationRepository {
  list(): Promise<NotificationDto[]>;
  create(entity: CreateNotificationDto): Promise<NotificationDto>;
}
