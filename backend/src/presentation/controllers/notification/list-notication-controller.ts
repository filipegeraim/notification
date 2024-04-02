import type { ListNotificationUseCase } from '@/app/use-cases/notification/list-notification';
import { type Controller, type HttpRequest, type HttpResponse, handlerError } from '@/presentation/protocols';
import { StatusCodes } from 'http-status-codes';

export class ListNotificationController implements Controller {
  constructor(private readonly listUseCase: ListNotificationUseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const list = await this.listUseCase.perform();
      return {
        statusCode: StatusCodes.OK,
        body: list,
      };
    } catch (err) {
      return handlerError(err);
    }
  }
}
