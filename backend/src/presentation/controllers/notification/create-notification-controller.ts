import type { CreateNotificationUseCase } from '@/app/use-cases/notification/create-notification';
import { CreateNotificationDto } from '@/domain/models/notification';
import { type Controller, type HttpRequest, type HttpResponse, handlerError } from '@/presentation/protocols';
import { StatusCodes } from 'http-status-codes';

export class CreateNotificationController implements Controller {
  constructor(private readonly createUseCase: CreateNotificationUseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const notication = CreateNotificationDto.parse(httpRequest.body);
      const newNotification = await this.createUseCase.perform(notication);
      return {
        statusCode: StatusCodes.CREATED,
        body: newNotification,
      };
    } catch (err) {
      return handlerError(err);
    }
  }
}
