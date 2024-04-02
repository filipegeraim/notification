import type { NotificationHistoryDto } from '@/domain/models/notification-history';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { UseCase } from '@/domain/use-case';

export class ListNotificationHistoryUseCase implements UseCase {
  constructor(private readonly notificationHistoryRepository: NotificationHistoryRepository) {}

  async perform(): Promise<NotificationHistoryDto[]> {
    return await this.notificationHistoryRepository.list();
  }
}
