import type { CreateNotificationDto, NotificationDto } from '@/domain/models/notification';
import prismaClient from '@/infra/db/prisma/client';
import type { NotificationRepository } from '@/domain/repositories/notification-repository';
import { prismaNotificationToDto } from '@/infra/db/prisma/dto/notification';

export class PrismaNotificationRepository implements NotificationRepository {
  async list(): Promise<NotificationDto[]> {
    const list = await prismaClient.notification.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return list.map(prismaNotificationToDto);
  }
  async create(entity: CreateNotificationDto): Promise<NotificationDto> {
    const created = await prismaClient.notification.create({
      data: {
        category: entity.category,
        description: entity.description,
      },
    });
    return prismaNotificationToDto(created);
  }
}
