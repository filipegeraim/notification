import { adaptRoute } from '@/main/adapters/express-route-adapter';
import { makeListNotificationHistoryController } from '@/main/factories/controllers/notification-history/make-list-notification-history-controller';
import { makeCreateNotificationController } from '@/main/factories/controllers/notification/make-create-notification-controller';
import { makeListNotificationController } from '@/main/factories/controllers/notification/make-list-notification-controller';
import { Router } from 'express';

const router = Router();

router.get('/', adaptRoute(makeListNotificationController()));
router.post('/', adaptRoute(makeCreateNotificationController()));
router.get('/logs', adaptRoute(makeListNotificationHistoryController()));

export default router;
