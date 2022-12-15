import { z } from 'zod';

export const schemaForType =
  <T>() =>
  <S extends z.ZodType<T, z.ZodTypeDef, T>>(arg: S) =>
    arg;
