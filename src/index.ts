import { Hono } from 'hono'

import { NodeAdapter } from './adapter/node_adapter'
import { App } from './app'

const app = App.init()

NodeAdapter.serveApp(app)
