import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ ok: true, service: "soundly-api" }));

export default app;
