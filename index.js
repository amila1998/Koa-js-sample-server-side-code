// index.js
const Koa = require('koa');
const app = new Koa();

// Our First Route
app.use(async ctx => {
	ctx.body = 'Hello World';
});

// Bootstrap the server
app.listen(5000,()=>{
    console.log("Äpp is Started on port: " +5000);
});