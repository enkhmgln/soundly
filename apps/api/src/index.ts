import { Hono } from "hono";
import { logger } from "hono/logger";
import { env } from "./constants/config";

const app = new Hono();
app.use(logger());
app.get("/", (c) =>
  c.json({ ok: true, message: "Hello from API", version: "0.1.0" }),
);

app.get("/health", (c) => c.json({ status: "ok" }));

Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
});
