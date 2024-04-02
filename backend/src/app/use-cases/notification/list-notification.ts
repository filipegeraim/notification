import type { NotificationDto } from '@/domain/models/notification';
import type { NotificationRepository } from '@/domain/repositories/notification-repository';
import type { UseCase } from '@/domain/use-case';

export class ListNotificationUseCase implements UseCase {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async perform(): Promise<NotificationDto[]> {
    return await this.notificationRepository.list();
  }
}
