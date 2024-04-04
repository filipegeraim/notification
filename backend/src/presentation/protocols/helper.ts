import { ExistingError } from '@/domain/exceptions/existing-error';
import type { HttpError } from '@/presentation/protocols/http-error';
import type { HttpResponse } from '@/presentation/protocols/http-response';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export function handlerError(err: any): HttpResponse<HttpError> {
  if (err instanceof ExistingError) {
    return {
      statusCode: err.statusCode,
      body: {
        type: err.name,
        message: err.message,
      },
    };
  }

  return {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    body: {
      type: 'internal_server_error',
      message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    },
  };
}
