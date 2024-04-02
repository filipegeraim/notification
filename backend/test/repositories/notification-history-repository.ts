import type { CreateNotificationHistoryDto, NotificationHistoryDto } from '@/domain/models/notification-history';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import { listNotificationHistoryTest } from 'test/data/notification-history';

export class InMemoryNotificationHistoryRepository implements NotificationHistoryRepository {
  list(): Promise<NotificationHistoryDto[]> {
    return new Promise((resolve) => resolve(listNotificationHistoryTest));
  }
  create(entity: CreateNotificationHistoryDto): Promise<NotificationHistoryDto> {
    return new Promise((resolve) => resolve({ ...entity, createdAt: new Date() }));
  }
}
