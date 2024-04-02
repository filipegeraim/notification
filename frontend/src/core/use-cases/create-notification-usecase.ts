import type { NotificationRepository } from '@/core/domain/repositories/notification-repository';
import type { Notification, NotificationForm } from '@/core/domain/types/notification';
import type { UseCase } from '@/core/domain/use-case';

export class CreateNotificationUseCase implements UseCase {
  constructor(private readonly service: NotificationRepository) {}
  async perform(payload: NotificationForm): Promise<void> {
    await this.service.create(payload.description, payload.category);
  }
}
