import type { UserRepository } from '@/domain/repositories/user-repository';
import type { UserDto } from '@/domain/models/user';
import prismaClient from '@/infra/db/prisma/client';
import type { Category } from '@/domain/models/category';
import { prismaUserIncludeToDto } from '@/infra/db/prisma/dto/user';

export class PrismaUserRepository implements UserRepository {
  async listByCategory(category: Category): Promise<UserDto[]> {
    const list = await prismaClient.user.findMany({
      include: {
        UserCategory: true,
        UserChannel: true,
      },
      where: {
        UserCategory: {
          some: {
            category: category,
          },
        },
      },
    });
    return list.map(prismaUserIncludeToDto);
  }
}
