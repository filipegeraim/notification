import type { Category } from '@/domain/models/category';
import type { UserDto } from '@/domain/models/user';

export interface UserRepository {
  listByCategory(category: Category): Promise<UserDto[]>;
}