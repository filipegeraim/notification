import { StatusCodes } from 'http-status-codes';

export class ExistingError extends Error {
  public statusCode = StatusCodes.CONFLICT;
  constructor(message: string) {
    super(message);
    this.name = 'existing_error';
  }
}
