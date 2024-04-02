import type { UserRepository } from '@/domain/repositories/user-repository';
import { PrismaUserRepository } from '@/infra/db/prisma/repositories/user-repository';

export const makeUserRepository = (): UserRepository => {
  return new PrismaUserRepository();
};
