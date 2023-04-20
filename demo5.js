const Koa = require('koa');
const Router = require('koa-router');

// Koa-router 中间件入门
const app = new Koa();
const router = new Router(
  {
    // 配置前缀，所有路径都添加一个前缀
    prefix: '/koa'
  }
);

// 配置页面
router.get('/', function (ctx, next) {
  ctx.body = 'Hello Koa2.';
});

router.get('/todo', function (ctx, next) {
  ctx.body = 'Hello Todo.';
});


app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');