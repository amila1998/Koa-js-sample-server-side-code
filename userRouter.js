import koaRouter from 'koa-router';
import auth from './userAuth.js';
import { addData, getUser, readAllData } from './userController.js';

const userRouter = new koaRouter(({ prefix: '/user' }));

userRouter.post('/addData',addData);
userRouter.get('/readAllData',readAllData);
userRouter.get('/getUser',auth,getUser);

export default userRouter;