import type { NotificationRepository } from '@/domain/repositories/notification-repository';
import { PrismaNotificationRepository } from '@/infra/db/prisma/repositories/notification-repository';

export const makeNotificationRepository = (): NotificationRepository => {
  return new PrismaNotificationRepository();
};
