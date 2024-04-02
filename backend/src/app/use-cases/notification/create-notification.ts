import { ExistingError } from '@/domain/exceptions/existing-error';
import type { CreateNotificationDto, NotificationDto } from '@/domain/models/notification';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { NotificationRepository } from '@/domain/repositories/notification-repository';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import type { UserRepository } from '@/domain/repositories/user-repository';
import type { UseCase } from '@/domain/use-case';

export class CreateNotificationUseCase implements UseCase {
  constructor(
    private readonly notificationRepository: NotificationRepository,
    private readonly userRepository: UserRepository,
    private readonly sendNotificationRepository: SendNotificationRepository,
  ) {}

  async perform(entity: CreateNotificationDto): Promise<NotificationDto> {
    const newNotification = await this.notificationRepository.create({
      category: entity.category,
      description: entity.description,
    });
    const users = await this.userRepository.listByCategory(entity.category);
    await this.sendNotificationRepository.send(newNotification, users);
    return newNotification;
  }
}
