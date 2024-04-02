import { z } from 'zod';

export const HasId = z.object({ id: z.number() });
