import type { CreateNotificationHistoryDto, NotificationHistoryDto } from '@/domain/models/notification-history';

export interface NotificationHistoryRepository {
  list(): Promise<NotificationHistoryDto[]>;
  create(entity: CreateNotificationHistoryDto): Promise<NotificationHistoryDto>;
}
