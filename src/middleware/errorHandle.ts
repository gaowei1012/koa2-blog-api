import { Context } from 'koa';

const errHandle = async (ctx: Context, next: Function) => {
    return next().catch((err: any) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                message: '游客只有访问权',
                type: 'error'
            };
        } else {
            throw err;
        }
    });
};

export default errHandle;