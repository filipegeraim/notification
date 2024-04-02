import type { UserRepository } from '@/domain/repositories/user-repository';
import type { UserDto } from '@/domain/models/user';
import type { Category } from '@/domain/models/category';
import { listUserTest } from 'test/data/user';

export class InMemoryUserRepository implements UserRepository {
  async listByCategory(category: Category): Promise<UserDto[]> {
    return new Promise((resolve) => resolve(listUserTest));
  }
}
