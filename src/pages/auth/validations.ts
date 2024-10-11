import { SIGN_IN_FORM_SCHEMA, SIGN_UP_FORM_SCHEMA } from '@/constants';
import { z } from 'zod';

const { EMAIL, PASSWORD } = SIGN_IN_FORM_SCHEMA;
const { USERNAME, FIRST_NAME, LAST_NAME } = SIGN_UP_FORM_SCHEMA;

// creating a schema for strings
export const signInSchema = z.object({
  [EMAIL.key]: z.string().email().trim(),
  [PASSWORD.key]: z
    .string({ message: 'please enter a valid password!' })
    .min(5)
    .max(15),
});

export const signUpSchema = signInSchema.extend({
  [FIRST_NAME.key]: z.string().min(2).max(20),
  [LAST_NAME.key]: z.string().min(2).max(20),
  [USERNAME.key]: z.string().min(5).max(10),
});
