import { z } from 'zod';

export const createClinicSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(150),

  slug: z
    .string()
    .min(3)
    .max(100),

  logo: z
    .string()
    .optional(),


  primaryColor: z
    .string()
    .optional(),

  secondaryColor: z
    .string()
    .optional(),
});

export type CreateClinicDto =
  z.infer<typeof createClinicSchema>;