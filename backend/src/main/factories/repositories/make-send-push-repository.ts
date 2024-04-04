import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import { SendPushRepository } from '@/infra/external/send-push-repository';

export const makeSendPushRepository = (
  historyRepository: NotificationHistoryRepository,
): SendNotificationRepository => {
  return new SendPushRepository(historyRepository);
};
