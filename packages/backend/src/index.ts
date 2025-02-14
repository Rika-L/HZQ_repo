import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'

const app = new Hono()

app.get(
  '/static/*',
  serveStatic({
    root: './',
    rewriteRequestPath: path =>
      path.replace(/^\/static/, '/public'),
  }),
)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
const port = 7452
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
