const Koa = require('koa');
const Router = require('koa-router');


// Koa-router 路由参数
const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  console.log(ctx.query);
  ctx.body = ctx.querystring;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('[demo7] start-quick is starting at port 3000');