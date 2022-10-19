import { z } from 'zod';

export const commonFormSchema = z.object({
  name: z.string(),
  vcpu: z.number(),
  memory: z.number(),
});
