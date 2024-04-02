import { z } from 'zod';

export const HasCreatedAt = z.object({ createdAt: z.date() });
