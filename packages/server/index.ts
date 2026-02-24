import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => {
  console.log(process.env.CLAUDE_API_KEY);
  return c.text("Hello Bun!!!");
});

export default {
  port: 3001,
  fetch: app.fetch,
};
