import { Hono } from "hono";
import { logger } from "hono/logger";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./routers";
import { createContext } from "@/trpc/core";
import { env } from "./constants/config";

const app = new Hono();
app.use(logger());
app.get("/", (c) =>
  c.json({ ok: true, message: "Hello from API", version: "0.1.0" }),
);
console.log(`Server is running on port ${env.PORT}`);

app.use("/trpc/*", trpcServer({ router: appRouter, createContext }));

Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
});
