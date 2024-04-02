import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { SendNotificationRepository } from '@/domain/repositories/send-notification-repository';
import { PrismaNotificationHistoryRepository } from '@/infra/db/prisma/repositories/notification-history-repository';
import { ExternalSendNotificationRepository } from '@/infra/external/send-notification-repository';

export const makeSendNotificationRepository = (
  historyRepository: NotificationHistoryRepository,
): SendNotificationRepository => {
  return new ExternalSendNotificationRepository(historyRepository);
};
