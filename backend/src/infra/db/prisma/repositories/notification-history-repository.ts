import prismaClient from '@/infra/db/prisma/client';
import type { NotificationHistoryRepository } from '@/domain/repositories/notification-history-repository';
import type { CreateNotificationHistoryDto, NotificationHistoryDto } from '@/domain/models/notification-history';
import { prismaNotificationHistoryToDto } from '@/infra/db/prisma/dto/notification-history';

export class PrismaNotificationHistoryRepository implements NotificationHistoryRepository {
  async list(): Promise<NotificationHistoryDto[]> {
    const list = await prismaClient.notificationHistory.findMany({
      include: {
        notification: true,
        user: {
          include: {
            UserCategory: true,
            UserChannel: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return list.map(prismaNotificationHistoryToDto);
  }
  async create(entity: CreateNotificationHistoryDto): Promise<NotificationHistoryDto> {
    const created = await prismaClient.notificationHistory.create({
      data: {
        notificationId: entity.notification.id,
        userId: entity.user.id,
      },
      include: {
        notification: true,
        user: {
          include: {
            UserCategory: true,
            UserChannel: true,
          },
        },
      },
    });
    return prismaNotificationHistoryToDto(created);
  }
}
