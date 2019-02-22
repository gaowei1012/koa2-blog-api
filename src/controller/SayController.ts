import { Context } from 'koa';
import * as DBHelper from '../DBHelper';
const { SayHelper } = DBHelper;

export default class SayController {

    public static async addSay(ctx: Context) {
        const result = await SayHelper.addSay(ctx.request.body);
        ctx.body = result;
    };

    public static async deleteSay(ctx: Context) {
        const result = await SayHelper.deleteSay(ctx.request.body);
        ctx.body = result;
    };

    public static async findSay(ctx: Context) {
        const result = await SayHelper.findSay(ctx.query);
        if (result) {
            ctx.body = result;
        };
    };
};


