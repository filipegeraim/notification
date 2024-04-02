import { z } from 'zod';

export type Notification = {
  id: number;
  description: string;
  category: string;
  createdAt: string;
};

export const CategorySchema = z.enum(['sports', 'movies', 'finance']);
export type CategorySchema = z.infer<typeof CategorySchema>;
export const NotificationForm = z.object({
  description: z.string().min(1, 'Description is required'),
  category: CategorySchema,
});
export type NotificationForm = z.infer<typeof NotificationForm>;
