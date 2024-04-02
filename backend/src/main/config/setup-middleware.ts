import { Express } from 'express';
import { bodyParser } from '@/main/middleware';

export function setupMiddleware(app: Express): void {
  app.use(bodyParser);
}
