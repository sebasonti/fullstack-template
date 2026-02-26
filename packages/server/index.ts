import { Hono } from 'hono';

const app = new Hono();
app.get('/', (c) => c.json({ message: 'Hello World!' }));

app.get('/api/hello', (c) => c.json({ message: 'Hello from Hono!' }));

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
