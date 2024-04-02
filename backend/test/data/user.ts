import { Category } from '@/domain/models/category';
import { Channel } from '@/domain/models/channel';
import type { UserDto } from '@/domain/models/user';

export const listUserTest: UserDto[] = [
  {
    id: 1,
    name: 'User Test',
    email: 'user@test.com',
    phone: '+55123456789',
    category: [Category.FINANCE],
    channel: [Channel.PUSH],
  },
  {
    id: 2,
    name: 'User Test 2',
    email: 'user2@test.com',
    phone: '+55987654321',
    category: [Category.FINANCE, Category.SPORTS],
    channel: [Channel.SMS, Channel.EMAIL],
  },
];
