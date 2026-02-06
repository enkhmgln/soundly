import { z } from "zod";

export const createUserInput = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
});

export const updateUserInput = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().min(1),
});
