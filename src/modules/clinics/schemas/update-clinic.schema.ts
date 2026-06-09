import { z } from 'zod';
import { createClinicSchema } from './create-clinic.schema';

export const updateClinicSchema =
  createClinicSchema.partial();

export type UpdateClinicDto =
  z.infer<typeof updateClinicSchema>;