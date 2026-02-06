import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Alan Turing", email: "alan@example.com" },
];
let nextUserId = 3;

export const userStore = {
  list: () => users,
  get: (id: number) => users.find((item) => item.id === id) ?? null,
  create: (data: { name: string; email: string }) => {
    const user: User = {
      id: nextUserId++,
      name: data.name.trim(),
      email: data.email.trim(),
    };
    users.push(user);
    return user;
  },
  update: (id: number, data: { name: string; email: string }) => {
    const index = users.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const updated: User = {
      id,
      name: data.name.trim(),
      email: data.email.trim(),
    };
    users[index] = updated;
    return updated;
  },
  patch: (id: number, data: { name?: string; email?: string }) => {
    const user = users.find((item) => item.id === id);
    if (!user) {
      return null;
    }
    if (typeof data.name === "string") {
      user.name = data.name.trim();
    }
    if (typeof data.email === "string") {
      user.email = data.email.trim();
    }
    return user;
  },
  remove: (id: number) => {
    const index = users.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const [removed] = users.splice(index, 1);
    return removed;
  },
};

export const createContext = () => ({});
export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const appRouter = t.router({
  user: t.router({
    list: t.procedure.query(() => userStore.list()),
    get: t.procedure.input(z.number()).query(({ input }) => userStore.get(input)),
    create: t.procedure
      .input(z.object({ name: z.string().min(1), email: z.string().min(1) }))
      .mutation(({ input }) => userStore.create(input)),
    update: t.procedure
      .input(
        z.object({
          id: z.number(),
          name: z.string().min(1),
          email: z.string().min(1),
        }),
      )
      .mutation(({ input }) => userStore.update(input.id, input)),
    delete: t.procedure
      .input(z.number())
      .mutation(({ input }) => userStore.remove(input)),
  }),
});

export type AppRouter = typeof appRouter;
