const { builtinModules } = require("module");

/*
 * @Descripttion: 
 * @version: 
 * @Author: tianlu.tian
 * @Date: 2020-06-30 14:30:11
 * @LastEditors: tianlu.tian
 * @LastEditTime: 2020-06-30 14:31:06
 */ 
class Context{
  constructor(req, res){
    this.req = req
    this.res = res
  }
}
module.exports = Context