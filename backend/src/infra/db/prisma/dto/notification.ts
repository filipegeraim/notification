import { NotificationDto } from '@/domain/models/notification';
import { Notification } from '@prisma/client';

export function prismaNotificationToDto(prisma: Notification): NotificationDto {
  return NotificationDto.parse(prisma);
}
