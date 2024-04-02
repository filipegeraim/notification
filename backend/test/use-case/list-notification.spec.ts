import { ListNotificationUseCase } from '@/app/use-cases/notification/list-notification';
import { listNotificationTest } from 'test/data/notification';
import { InMemoryNotificationRepository } from 'test/repositories/notification-repository';

describe('List notification use case', () => {
  it('should return all notification', async () => {
    const useCase = new ListNotificationUseCase(new InMemoryNotificationRepository());
    await expect(useCase.perform()).resolves.toEqual(listNotificationTest);
  });
});
