import type { LogsRepository } from '@/core/domain/repositories/logs-repository';
import type { Logs } from '@/core/domain/types/logs';
import type { UseCase } from '@/core/domain/use-case';

export class ListLogsUseCase implements UseCase {
  constructor(private readonly service: LogsRepository) {}
  async perform(): Promise<Logs[]> {
    return await this.service.list();
  }
}
