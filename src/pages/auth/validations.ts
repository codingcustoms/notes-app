import { z } from 'zod';

// creating a schema for strings
export const signInSchema = z.object({
  email: z.string().email().trim(),
  password: z
    .string({ message: 'please enter a valid password!' })
    .regex(/[A-Za-z]/)
    .min(5)
    .max(15),
});
export const signUpSchema = z.object({
  firstName: z.string(),
  email: z.string().email().trim(),
  password: z
    .string({ message: 'please enter a valid password!' })
    .regex(/[A-Za-z]/)
    .min(5)
    .max(15),
  username: z.string().trim().min(5).max(15),
});
