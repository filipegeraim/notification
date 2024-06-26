import { Controller, HttpRequest } from '@/presentation/protocols';
import { Request, Response } from 'express';

export function adaptRoute(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
}
