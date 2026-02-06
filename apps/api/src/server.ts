import { Hono } from "hono";
import { logger } from "hono/logger";
import { trpcServer } from "@hono/trpc-server";
import { appRouter, createContext } from "./trpc";

const app = new Hono();
app.use(logger());
app.get("/", (c) =>
  c.json({ ok: true, message: "Hello from API", version: "0.1.0" }),
);

app.get("/health", (c) => c.json({ status: "ok" }));

app.use("/trpc/*", trpcServer({ router: appRouter, createContext }));
