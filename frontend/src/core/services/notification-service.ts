import type { NotificationRepository } from '@/core/domain/repositories/notification-repository';
import type { Notification } from '@/core/domain/types/notification';
import { http } from '@/core/config/http';

export class NotificationService implements NotificationRepository {
  async create(description: string, category: string): Promise<void> {
    try {
      await http.post(`notification`, { description: description, category: category });
    } catch (err) {
      throw new Error('Error on save notification');
    }
  }
  async list(): Promise<Notification[]> {
    try {
      const { data } = await http.get<Notification[]>(`notification`);
      return data;
    } catch (err) {
      throw new Error('Error on fetch notification');
    }
  }
}
