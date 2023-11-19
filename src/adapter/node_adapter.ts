import { Hono } from "hono"
import { serve } from "@hono/node-server"

export class NodeAdapter {
  static serveApp (app: Hono) {
    const defaultPort = 4001
    console.log(`Listening on port ${defaultPort}`)
    serve({ fetch: app.fetch, port: defaultPort })
  }
}
