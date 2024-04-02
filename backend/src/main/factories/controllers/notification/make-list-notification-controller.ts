import { ListNotificationUseCase } from '@/app/use-cases/notification/list-notification';
import { makeNotificationRepository } from '@/main/factories/repositories/make-notification-repository';
import { ListNotificationController } from '@/presentation/controllers/notification/list-notication-controller';
import type { Controller } from '@/presentation/protocols/controller';

export const makeListNotificationController = (): Controller => {
  const repository = makeNotificationRepository();
  const useCase = new ListNotificationUseCase(repository);
  return new ListNotificationController(useCase);
};
