import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createContext = () => ({});
export type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});
