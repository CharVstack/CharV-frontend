import { z } from 'zod';

import { PostCreateNewVMRequest } from '@api-hooks/v1/@types';
import { schemaForType } from '@utils/schema';

export const createVmFormSchema = schemaForType<PostCreateNewVMRequest>()(
  z.object({
    name: z.string().min(1),
    cpu: z.number().positive(),
    memory: z.number().positive(),
  })
);
