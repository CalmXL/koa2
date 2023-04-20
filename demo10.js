const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
// koa static 静态资源中间件

const staticPath = '/static';
app.use(static(
  path.join(__dirname, staticPath)
));

app.use(async (ctx) => {
  ctx.body = 'hello koa2';
});

app.listen(3000);
console.log('[demo10] start-quick is starting at port 3000');