const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {

  if (ctx.url === '/' && ctx.method === 'GET') {

    let html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="username" /><br />
        <p>age</p>
        <input name="age" /><br />
        <p>webSite</p>
        <input name="webSite" /><br />
        
        <button type="submit">submit</button>
      </form>
    `

    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postdata = await parsePostData(ctx); // => 'username=xulei&age=18&webSite=baidu'
    let jsonData = parseQueryStr(postdata);

    ctx.body = jsonData;
  } else {
    ctx.body = '<h1>404!</h1>'
  }
})

// 解析 postData 数据
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.on('data', (data) => {
        postData += data;
      })

      ctx.req.addListener('end', function () {
        resolve(postData);
      })
    } catch (e) {
      reject(e);
    }
  })
}


/**
 * post 字符串解析 JSON 对象
 */
function parseQueryStr (queryStr) {
  let queryData = {};
  let queryList = queryStr.split('&');

  console.log(queryList);

  for (let [index, queryStr] of queryList.entries()) {
    let item = queryStr.split('=');
    queryData[item[0]] = decodeURIComponent(item[1]);
  }
  
  return queryData;
}


app.listen(3000);
console.log('[demo2] start-quick is starting at port 3000');