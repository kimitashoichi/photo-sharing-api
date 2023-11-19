import { Context, Hono } from 'hono'

export class PhotoHandler {
  static apply (app: Hono) {
    app.post('/photo/upload', PhotoHandler.upload)
  }

  /**
   * 写真投稿
   */
  static async upload (c: Context) {
    const req = await c.req.json()
    console.log('req', req)
    
    return c.json({
      status: 200,
      message: '登録に成功しました'
    })
  }
}
