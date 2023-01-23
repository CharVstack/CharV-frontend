import { z } from 'zod';

import { PatchUpdateVMRequest } from '@api-hooks/v1/@types';
import { schemaForType } from '@utils/schema';

export const updateVmFormSchema = schemaForType<PatchUpdateVMRequest>()(
  z.object({
    name: z.string().min(1),
    cpu: z.number().positive(),
    memory: z.number().positive(),
  })
);
