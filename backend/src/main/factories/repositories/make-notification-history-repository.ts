import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import { PrismaNotificationHistoryRepository } from '@/infra/db/prisma/repositories/notification-history-repository';

export const makeNotificationHistoryRepository = (): NotificationHistoryRepository => {
  return new PrismaNotificationHistoryRepository();
};
