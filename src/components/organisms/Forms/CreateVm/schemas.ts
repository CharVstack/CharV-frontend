import { z } from 'zod';

export const commonFormSchema = z.object({
  name: z.string(),
  cpu: z.number(),
  memory: z.number(),
});
