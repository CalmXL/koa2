const Koa = require('koa');
const app = new Koa();


/**
 * koa2 中 GET 请求通过 request 接收，但是接受方法有俩种: query 和 querystring
 *   query: 返回的是格式化好的参数对象。
 *   querystring: 返回的是请求字符串。
 * 
 * 总结：
 *   Get请求方式有俩种: 一种 request 中获得, 一种是一直从上下文中获得。
 *    获取的格式也有俩种：query 和 querystring.
 */
app.use(async (ctx) => {
  
  let url = ctx.url;
  // 从 request 中获取 GET 请求 
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  // 从 ctx 上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  };

});

app.listen(3000);

console.log('[demo] start-quick is starting at port 3000');