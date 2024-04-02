import { UserDto } from '@/domain/models/user';
import { Prisma, type User } from '@prisma/client';

export function prismaUserIncludeToDto(
  prisma: Prisma.UserGetPayload<{ include: { UserCategory: true; UserChannel: true } }>,
): UserDto {
  return UserDto.parse({
    id: prisma.id,
    name: prisma.name,
    phone: prisma.phone,
    email: prisma.email,
    category: prisma.UserCategory.map((c) => c.category),
    channel: prisma.UserChannel.map((c) => c.channel),
  });
}
