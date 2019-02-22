import { Context } from 'koa';
import * as DBHelper from '../DBHelper';
const { UserHelper } = DBHelper;

export default class UserController {

    public static async updateUser(ctx: Context) {
        const result = await UserHelper.updateUser();
        ctx.body = result;
    };

    public static async login(ctx: Context) {
        const result = await UserHelper.findUser(ctx.request.body);

        if (result) {
            ctx.body = result;
        };
    };
};