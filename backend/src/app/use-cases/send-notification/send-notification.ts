import { SendError } from '@/domain/exceptions/send-error';
import { Channel } from '@/domain/models/channel';
import type { NotificationDto } from '@/domain/models/notification';
import type { UserDto } from '@/domain/models/user';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import type { UseCase } from '@/domain/use-case';
import PromisePool from '@supercharge/promise-pool';

export class SendNotificationUseCase implements UseCase {
  constructor(
    private readonly sendSmsRepository: SendNotificationRepository,
    private readonly sendPushRepository: SendNotificationRepository,
    private readonly sendEmailRepository: SendNotificationRepository,
  ) {}
  async perform(notification: NotificationDto, users: UserDto[]): Promise<any> {
    const { errors } = await PromisePool.for(users)
      .withConcurrency(5)
      .process(async (user) => {
        if (user.channel?.includes(Channel.SMS)) {
          await this.sendSmsRepository.send(notification, user);
        }
        if (user.channel?.includes(Channel.PUSH)) {
          await this.sendPushRepository.send(notification, user);
        }
        if (user.channel?.includes(Channel.EMAIL)) {
          await this.sendEmailRepository.send(notification, user);
        }
      });
    if (errors.length > 0) {
      throw new SendError('Occurs an error to sending notification');
    }
  }
}
