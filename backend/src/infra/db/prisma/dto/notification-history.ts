import { NotificationHistoryDto } from '@/domain/models/notification-history';
import { prismaNotificationToDto } from '@/infra/db/prisma/dto/notification';
import { prismaUserIncludeToDto } from '@/infra/db/prisma/dto/user';
import { Prisma } from '@prisma/client';

export function prismaNotificationHistoryToDto(
  prisma: Prisma.NotificationHistoryGetPayload<{
    include: { notification: true; user: { include: { UserCategory: true; UserChannel: true } } };
  }>,
): NotificationHistoryDto {
  return {
    notification: prismaNotificationToDto(prisma.notification),
    user: prismaUserIncludeToDto(prisma.user),
    createdAt: prisma.createdAt,
  };
}
