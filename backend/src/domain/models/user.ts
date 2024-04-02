import { Category } from '@/domain/models/category';
import { Channel } from '@/domain/models/channel';
import { HasId } from '@/domain/models/id';
import { z } from 'zod';

export const User = z
  .object({
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone is required'),
    category: z.nativeEnum(Category).array().nullish(),
    channel: z.nativeEnum(Channel).array().nullish(),
  })
  .merge(HasId);

export type User = z.infer<typeof User>;

// DTO
export const UserDto = User;
export type UserDto = z.infer<typeof UserDto>;

// DTO: Create
export const CreateUserDTO = User.omit({ id: true });
export type CreateUserDTO = z.infer<typeof User>;
