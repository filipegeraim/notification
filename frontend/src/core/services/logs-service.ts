import { http } from '@/core/config/http';
import type { LogsRepository } from '@/core/domain/repositories/logs-repository';
import type { Logs } from '@/core/domain/types/logs';

export class LogsService implements LogsRepository {
  async list(): Promise<Logs[]> {
    try {
      const { data } = await http.get<Logs[]>(`notification/logs`);
      return data;
    } catch (err) {
      throw new Error('Error on fetch notification');
    }
  }
}
