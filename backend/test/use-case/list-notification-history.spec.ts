import { ListNotificationHistoryUseCase } from '@/app/use-cases/notification-history/list-notification-history';
import { listNotificationHistoryTest } from 'test/data/notification-history';
import { InMemoryNotificationHistoryRepository } from 'test/repositories/notification-history-repository';

describe('List notification history use case', () => {
  it('should return all notification history', async () => {
    const useCase = new ListNotificationHistoryUseCase(new InMemoryNotificationHistoryRepository());
    await expect(useCase.perform()).resolves.toEqual(listNotificationHistoryTest);
  });
});
