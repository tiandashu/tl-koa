/*
 * @Descripttion: 
 * @version: 
 * @Author: tianlu.tian
 * @Date: 2020-06-30 14:18:04
 * @LastEditors: tianlu.tian
 * @LastEditTime: 2020-06-30 15:10:52
 */ 
const Koa = require('../core/Koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(999)
  await next()
})

app.use(async (ctx, next)=>{
  ctx.body = 'hello 99'
  await next()
})



app.listen(3000)
console.log('Server running at http://127.0.0.1:3000/');