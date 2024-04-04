import { CreateNotificationUseCase } from '@/app/use-cases/notification/create-notification';
import { SendNotificationUseCase } from '@/app/use-cases/send-notification/send-notification';
import { makeNotificationHistoryRepository } from '@/main/factories/repositories/make-notification-history-repository';
import { makeNotificationRepository } from '@/main/factories/repositories/make-notification-repository';
import { makeSendEmailRepository } from '@/main/factories/repositories/make-send-email-repository';
import { makeSendPushRepository } from '@/main/factories/repositories/make-send-push-repository';
import { makeSendSMSRepository } from '@/main/factories/repositories/make-send-sms-repository';
import { makeUserRepository } from '@/main/factories/repositories/make-user-repository';
import { CreateNotificationController } from '@/presentation/controllers/notification/create-notification-controller';
import type { Controller } from '@/presentation/protocols/controller';

export const makeCreateNotificationController = (): Controller => {
  const notificationRepository = makeNotificationRepository();
  const userRepository = makeUserRepository();
  const notificationHistoryRepository = makeNotificationHistoryRepository();

  const sendSMSRepository = makeSendSMSRepository(notificationHistoryRepository);
  const sendPushRepository = makeSendPushRepository(notificationHistoryRepository);
  const sendEmailRepository = makeSendEmailRepository(notificationHistoryRepository);
  const sendUseCase = new SendNotificationUseCase(sendSMSRepository, sendPushRepository, sendEmailRepository);

  const createNotificationUseCase = new CreateNotificationUseCase(notificationRepository, userRepository, sendUseCase);
  return new CreateNotificationController(createNotificationUseCase);
};
