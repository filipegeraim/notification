import { LogsService } from '@/core/services/logs-service';
import { ListLogsUseCase } from '@/core/use-cases/list-logs-usecase';

export function makeListLogs() {
  return new ListLogsUseCase(new LogsService());
}
