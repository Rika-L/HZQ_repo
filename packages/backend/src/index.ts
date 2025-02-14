import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())

app.notFound((c) => {
  return c.text('404啦', 404)
})

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
