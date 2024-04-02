import { Express } from 'express';
import { NotificationRouter } from '@/main/routes';

export function setupRoutes(app: Express): void {
  app.use('/notification', NotificationRouter);
}
