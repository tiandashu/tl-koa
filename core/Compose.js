/*
 * @Descripttion: 
 * @version: 
 * @Author: tianlu.tian
 * @Date: 2020-06-30 14:50:03
 * @LastEditors: tianlu.tian
 * @LastEditTime: 2020-06-30 15:16:04
 */ 
// 实现洋葱模型
// middleware: 每一个中间件将会执行
// next: 每个中间件将会通过 next 来执行下一个中间件

function Compose(middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if(i === middlewares.length) {
        return
      }
      
      return middleware(ctx, () => {
        dispatch(i + 1)
      })
    }
    return dispatch(0)
  }
}

module.exports = Compose