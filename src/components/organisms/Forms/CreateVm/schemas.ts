import { z } from 'zod';

export const commonFormSchema = z.object({
  name: z.string().min(1),
  cpu: z.number().positive(),
  memory: z.number().positive(),
});
