import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import { SendEmailRepository } from '@/infra/external/send-email-repository';

export const makeSendEmailRepository = (
  historyRepository: NotificationHistoryRepository,
): SendNotificationRepository => {
  return new SendEmailRepository(historyRepository);
};
