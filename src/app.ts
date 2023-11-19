import { Context, Hono } from 'hono'
import { logger } from 'hono/logger'

import { PhotoHandler } from './handler/photo_handler'


export class App {
  static init () {
    const app = new Hono();
    app.use('*', logger())
    app.use('*', (c: Context, next: any) => {
      console.log(`  ::: ${c.req.method} ${c.req.url}`)
      return next()
    })

    return App.apply_handlers(app)
  }

  static apply_handlers (app: Hono): Hono {
    PhotoHandler.apply(app)
    app.route('/api', app)

    return app
  }
}