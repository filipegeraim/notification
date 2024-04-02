import { PromisePool } from '@supercharge/promise-pool';
import type { UserDto } from '@/domain/models/user';
import type { NotificationDto } from '@/domain/models/notification';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import { Channel } from '@/domain/models/channel';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';

export class ExternalSendNotificationRepository implements SendNotificationRepository {
  constructor(private readonly historyRepository: NotificationHistoryRepository) {}

  async send(notification: NotificationDto, users: UserDto[]) {
    const { errors } = await PromisePool.for(users)
      .withConcurrency(5)
      .process(async (user) => {
        if (user.channel?.includes(Channel.SMS)) {
          // TODO: Create integration with SMS partner
        } else if (user.channel?.includes(Channel.EMAIL)) {
          // TODO: Create integration with EMAIL partner
        } else if (user.channel?.includes(Channel.PUSH)) {
          // TODO: Create integration with PUSH partner
        }
        return await this.historyRepository.create({ notification: notification, user: user });
      });
    if (errors.length > 0) {
      throw Error('Error on send a notification through partners');
    }
  }
}
