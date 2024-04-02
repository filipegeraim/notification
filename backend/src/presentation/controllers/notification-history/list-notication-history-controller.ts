import type { ListNotificationHistoryUseCase } from '@/app/use-cases/notification-history/list-notification-history';
import { type Controller, type HttpRequest, type HttpResponse, handlerError } from '@/presentation/protocols';
import { StatusCodes } from 'http-status-codes';

export class ListNotificationHistoryController implements Controller {
  constructor(private readonly listUseCase: ListNotificationHistoryUseCase) {}

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
