import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import cors from 'koa2-cors';
import { admin } from './config';
import errorHandle from './middleware/errorHandle';
import router from './router';
const app = new Koa();

app
    .use(
        cors({ // 处理跨域
            allowHeaders: ['Content-Type', 'Authorzation', 'Accept'],
            allowMethods: ['GET', 'POST', 'DELETE'],
            credentials: true,
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
            maxAge: 5,
            origin: () => '*'
        })
    )
    .use( errorHandle ) // 错误处理中间件
    .use(
        jwt({ secret: admin }).unless({
        path: [/\get/, '/api/login', '/api/update-user']
    }))
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8090, () => {
    console.log(`server listen started 8090`);
});
