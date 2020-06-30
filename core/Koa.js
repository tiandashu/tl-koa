const http = require('http');
const Context = require('./Context')
const Compose = require('./Compose')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);


class Koa {
  constructor() {
    this.middlewares = []
  }

  // 中间件函数，处理请求并完成响应
  use(middleware) {
    this.middlewares.push(middleware)
  }

  // 处理请求及响应，并且监听端口
  listen(...args) {
    const serve = http.createServer(async (req, res) => {
      const ctx = new Context(req, res)
      // 异常处理
      try {
        const fn = Compose(this.middlewares)
        await fn(ctx)
        
      } catch (e) {
        console.error(e)
        ctx.res.statusCode = 500
        ctx.res.write('Internel Server Error')
      }
      ctx.res.end(ctx.body)
    })
    serve.listen(...args)
  }
}

module.exports = Koa