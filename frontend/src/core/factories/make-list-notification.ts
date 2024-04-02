import { NotificationService } from '@/core/services/notification-service';
import { ListNotificationUseCase } from '@/core/use-cases/list-notification-usecase';

export function makeListNotification() {
  return new ListNotificationUseCase(new NotificationService());
}
