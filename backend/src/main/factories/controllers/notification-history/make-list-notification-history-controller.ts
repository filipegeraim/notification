import { ListNotificationHistoryUseCase } from '@/app/use-cases/notification-history/list-notification-history';
import { makeNotificationHistoryRepository } from '@/main/factories/repositories/make-notification-history-repository';
import { ListNotificationHistoryController } from '@/presentation/controllers/notification-history/list-notication-history-controller';
import type { Controller } from '@/presentation/protocols/controller';

export const makeListNotificationHistoryController = (): Controller => {
  const repository = makeNotificationHistoryRepository();
  const useCase = new ListNotificationHistoryUseCase(repository);
  return new ListNotificationHistoryController(useCase);
};
