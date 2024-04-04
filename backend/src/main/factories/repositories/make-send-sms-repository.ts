import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import { SendSMSRepository } from '@/infra/external/send-sms-repository';

export const makeSendSMSRepository = (
  historyRepository: NotificationHistoryRepository,
): SendNotificationRepository => {
  return new SendSMSRepository(historyRepository);
};
