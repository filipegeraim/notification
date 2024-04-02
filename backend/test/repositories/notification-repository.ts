import type { CreateNotificationDto, NotificationDto } from '@/domain/models/notification';
import type { NotificationRepository } from '@/domain/repositories/notification-repository';
import { listNotificationTest } from 'test/data/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
  async list(): Promise<NotificationDto[]> {
    return new Promise((resolve) => resolve(listNotificationTest));
  }
  async create(entity: CreateNotificationDto): Promise<NotificationDto> {
    return new Promise((resolve) => resolve(listNotificationTest[0]));
  }
}
