const Koa = require('koa');
const Router = require('koa-router');

// Koa-router 路由层级
const app = new Koa();

let home = new Router();
home.get('/jspang', async (ctx) => {
  ctx.body = 'Home JSpang';
}).get('/todo', async(ctx) => {
  ctx.body = 'Home Todo';
});


let page = new Router();
page.get('/jspang',async(ctx)=>{
    ctx.body="Page JSPang";
}).get('/todo',async(ctx)=>{
    ctx.body ='Page ToDo';
})

// 装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('[demo6] start-quick is starting at port 3000');