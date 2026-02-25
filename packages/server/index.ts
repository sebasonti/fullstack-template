import { Hono } from 'hono';

const app = new Hono();
app.get('/', (c) => {
  console.log(process.env.CLAUDE_API_KEY);
  return c.json({ message: 'Hello Bun!!!' });
});

app.get('/api/hello', (c) => c.json({ message: 'Hello Bun from Hono!' }));

export default {
  port: 3001,
  fetch: app.fetch,
};
