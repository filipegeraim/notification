import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import { SendError } from '@/domain/exceptions/send-error';
import type { UserDto } from '@/domain/models/user';
import type { NotificationDto } from '@/domain/models/notification';
import { Channel } from '@/domain/models/channel';

export class SendPushRepository implements SendNotificationRepository {
  constructor(private readonly historyRepository: NotificationHistoryRepository) {}

  async send(notification: NotificationDto, user: UserDto) {
    try {
      // TODO: Create a logic to integrate with a partner to send a push notification, and after send, save on notification history
      
      // call function

      //Save Notification History
      await this.historyRepository.create({ notification: notification, user: user, channel: Channel.PUSH });
    } catch (err) {
      throw new SendError('Occurs an error to process push notification.');
    }
  }
}
