// index.js
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import json from "koa-json";

import userRouter  from './userRouter.js';

const app = new Koa();

//middlewares
app.use(bodyparser());
app.use(json());

//Routes
app.use(userRouter.routes()).use(userRouter.allowedMethods());

// Bootstrap the server
app.listen(5000,()=>{
    console.log("Äpp is Started on port: " +5000);
});