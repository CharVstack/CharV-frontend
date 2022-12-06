import { z } from 'zod';

export const createVmFormSchema = z.object({
  name: z.string().min(1),
  cpu: z.number().positive(),
  memory: z.number().positive(),
});
