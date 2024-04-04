import { CreateNotificationUseCase } from '@/app/use-cases/notification/create-notification';
import { InMemoryNotificationRepository } from 'test/repositories/notification-repository';
import { InMemoryUserRepository } from 'test/repositories/user-repository';
import { InMemoryNotificationHistoryRepository } from 'test/repositories/notification-history-repository';
import { newNotificationTest } from 'test/data/notification';
import { SendSMSRepository } from '@/infra/external/send-sms-repository';
import { SendPushRepository } from '@/infra/external/send-push-repository';
import { SendEmailRepository } from '@/infra/external/send-email-repository';
import { SendNotificationUseCase } from '@/app/use-cases/send-notification/send-notification';

describe('Create notification use case', () => {
  it('should create notification', async () => {
    const notRepo = new InMemoryNotificationRepository();
    const userRepo = new InMemoryUserRepository();
    const histRepo = new InMemoryNotificationHistoryRepository();

    const sendSMS = new SendSMSRepository(histRepo);
    const sendPush = new SendPushRepository(histRepo);
    const sendEmail = new SendEmailRepository(histRepo);
    const sendUseCase = new SendNotificationUseCase(sendSMS, sendPush, sendEmail);

    const useCase = new CreateNotificationUseCase(notRepo, userRepo, sendUseCase);
    await expect(useCase.perform(newNotificationTest)).resolves.toHaveProperty('id', 1);
    await expect(useCase.perform(newNotificationTest)).resolves.toHaveProperty('createdAt');
  });
});
