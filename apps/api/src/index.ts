import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());
app.get("/", (c) =>
  c.json({ ok: true, message: "Hello from API", version: "0.1.0" }),
);

app.get("/health", (c) => c.json({ status: "ok" }));

const port = Number(process.env.PORT) || 3000;

Bun.serve({
  port,
  fetch: app.fetch,
});
