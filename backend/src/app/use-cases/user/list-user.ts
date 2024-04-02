import type { Category } from '@/domain/models/category';
import type { UserDto } from '@/domain/models/user';
import type { UserRepository } from '@/domain/repositories/user-repository';
import type { UseCase } from '@/domain/use-case';

export class ListUserUseCase implements UseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async perform(category: Category): Promise<UserDto[]> {
    return await this.userRepository.listByCategory(category);
  }
}
