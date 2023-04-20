const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if(ctx.url=== '/index'){
    ctx.cookies.set(
      'MyName','JSPang', {
        domain: '127.0.0.1', // 写 cookie 所在的域名
        path: '/index', // 写 cookie
        maxAge: 1000 * 60, // cookie 有效时长
        expires: new Date('2023-04-13'), // cookie 失效书剑
        httpOnly: false, // 是否只用于 http 请求
        overwrite: false // 是否允许重写 
      }
    );
    ctx.body = 'cookie is ok';
  }else{
    if (ctx.cookies.get('MyName')) {
      ctx.body = ctx.cookies.get('MyName');
    } else {
      ctx.body = 'hello world';
    }
  }
})



app.listen(3000);
console.log('[demo8] start-quick is starting at port 3000');