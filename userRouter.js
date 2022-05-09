import koaRouter from 'koa-router';
import { addData, readAllData } from './userController.js';

const userRouter = new koaRouter(({ prefix: '/user' }));

userRouter.post('/addData',addData);
userRouter.get('/readAllData',readAllData);

export default userRouter;