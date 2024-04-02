import { Logs } from '@/core/domain/types/logs';

export interface LogsRepository {
  list(): Promise<Logs[]>;
}
