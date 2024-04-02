import { CreateNotificationUseCase } from '@/app/use-cases/notification/create-notification';
import { makeNotificationHistoryRepository } from '@/main/factories/repositories/make-notification-history-repository';
import { makeNotificationRepository } from '@/main/factories/repositories/make-notification-repository';
import { makeSendNotificationRepository } from '@/main/factories/repositories/make-send-notification-repository';
import { makeUserRepository } from '@/main/factories/repositories/make-user-repository';
import { CreateNotificationController } from '@/presentation/controllers/notification/create-notification-controller';
import type { Controller } from '@/presentation/protocols/controller';

export const makeCreateNotificationController = (): Controller => {
  const notificationRepository = makeNotificationRepository();
  const userRepository = makeUserRepository();
  const notificationHistoryRepository = makeNotificationHistoryRepository();
  const sendNotificationRepository = makeSendNotificationRepository(notificationHistoryRepository);
  const useCase = new CreateNotificationUseCase(notificationRepository, userRepository, sendNotificationRepository);
  return new CreateNotificationController(useCase);
};
