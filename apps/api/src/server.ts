import { Hono } from "hono";
import { logger } from "hono/logger";
import { trpcServer } from "@hono/trpc-server";
import { env } from "./constants/config";
import { appRouter, createContext, userStore } from "./trpc";

const app = new Hono();
app.use(logger());
app.get("/", (c) =>
  c.json({ ok: true, message: "Hello from API", version: "0.1.0" }),
);

app.get("/health", (c) => c.json({ status: "ok" }));

app.use("/trpc/*", trpcServer({ router: appRouter, createContext }));

app.get("/users", (c) => c.json({ data: userStore.list() }));

app.get("/users/:id", (c) => {
  const id = Number(c.req.param("id"));
  const user = userStore.get(id);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json({ data: user });
});

app.post("/users", async (c) => {
  const body = await c.req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return c.json({ error: "Invalid payload" }, 400);
  }
  const user = userStore.create({ name: body.name, email: body.email });
  return c.json({ data: user }, 201);
});

app.put("/users/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return c.json({ error: "Invalid payload" }, 400);
  }
  const updated = userStore.update(id, {
    name: body.name,
    email: body.email,
  });
  if (!updated) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json({ data: updated });
});

app.patch("/users/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json().catch(() => null);
  if (!body || (body.name == null && body.email == null)) {
    return c.json({ error: "Invalid payload" }, 400);
  }
  const user = userStore.patch(id, {
    name: typeof body.name === "string" ? body.name : undefined,
    email: typeof body.email === "string" ? body.email : undefined,
  });
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json({ data: user });
});

app.delete("/users/:id", (c) => {
  const id = Number(c.req.param("id"));
  const removed = userStore.remove(id);
  if (!removed) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json({ data: removed });
});

Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
});
