import { t } from "@/trpc/core";
import { usersRouter } from "./users.router";

export const appRouter = t.router({
  users: usersRouter,
});

export type AppRouter = typeof appRouter;
