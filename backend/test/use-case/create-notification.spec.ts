import { CreateNotificationUseCase } from '@/app/use-cases/notification/create-notification';
import { ExternalSendNotificationRepository } from '@/infra/external/send-notification-repository';
import { InMemoryNotificationRepository } from 'test/repositories/notification-repository';
import { InMemoryUserRepository } from 'test/repositories/user-repository';
import { InMemoryNotificationHistoryRepository } from 'test/repositories/notification-history-repository';
import { newNotificationTest } from 'test/data/notification';

describe('Create notification use case', () => {
  it('should create notification', async () => {
    const notRepo = new InMemoryNotificationRepository();
    const userRepo = new InMemoryUserRepository();
    const histRepo = new InMemoryNotificationHistoryRepository();
    const sendRepo = new ExternalSendNotificationRepository(histRepo);
    const useCase = new CreateNotificationUseCase(notRepo, userRepo, sendRepo);
    await expect(useCase.perform(newNotificationTest)).resolves.toHaveProperty('id', 1);
    await expect(useCase.perform(newNotificationTest)).resolves.toHaveProperty('createdAt');
  });
});
