import { t } from "@/trpc/core";
import { createUserInput, updateUserInput } from "@/features/users/schemas";
import { userService } from "@/features/users/service";

export const usersRouter = t.router({
  list: t.procedure.query(() => userService.list()),
  get: t.procedure
    .input(updateUserInput.shape.id)
    .query(({ input }) => userService.get(input)),
  create: t.procedure
    .input(createUserInput)
    .mutation(({ input }) => userService.create(input)),
  update: t.procedure
    .input(updateUserInput)
    .mutation(({ input }) => userService.update(input.id, input)),
  delete: t.procedure
    .input(updateUserInput.shape.id)
    .mutation(({ input }) => userService.remove(input)),
});
