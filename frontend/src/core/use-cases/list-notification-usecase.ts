import type { NotificationRepository } from '@/core/domain/repositories/notification-repository';
import type { Notification } from '@/core/domain/types/notification';
import type { UseCase } from '@/core/domain/use-case';

export class ListNotificationUseCase implements UseCase {
  constructor(private readonly service: NotificationRepository) {}
  async perform(): Promise<Notification[]> {
    return await this.service.list();
  }
}
