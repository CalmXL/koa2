const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

// koa2 原生路由实现


function render (page) {

  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;

    fs.readFile(pageUrl, 'binary',function (error, data) {
      if (error) { 
        reject(error); 
      } else {
        resolve(data);
      }
    })
  })

}


async function route (url) {
  switch (url) {
    case '/':
      page = 'index.html';
      break;
    case '/index':
      page = 'index.html';
      break;
    case '/todo':
      page = 'todo.html';
      break;
    case '/404':
      page = '404.html';
      break;
    default: 
      break;
  }
  try {
    let html = await render(page);
    return html;
  } catch (e) {
    console.log('err');
    console.log(e);
  }
}




app.use(async (ctx) => {
  let url = ctx.request.url;

  let html = await route(url);
  ctx.body = html;
})

app.listen(3000);
console.log('[demo4] start-quick is starting at port 3000');

