import { NotificationService } from '@/core/services/notification-service';
import { CreateNotificationUseCase } from '@/core/use-cases/create-notification-usecase';

export function makeCreateNotification() {
  return new CreateNotificationUseCase(new NotificationService());
}
