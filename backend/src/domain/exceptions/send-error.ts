import { StatusCodes } from 'http-status-codes';

export class SendError extends Error {
  public statusCode = StatusCodes.BAD_REQUEST;
  constructor(message: string) {
    super(message);
    this.name = 'send_error';
  }
}
