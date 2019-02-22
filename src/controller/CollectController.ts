import { Context } from 'koa';
import * as DBHelper from '../DBHelper';
const { CollectHelper } = DBHelper;
export default class CollectController {
    // 增加
    public static async addCollect(ctx: Context) {
        const result = await CollectController.addCollect(ctx.request.body);
        ctx.body = result;
    };

    // 删除
    public static async deleteCollect(ctx: Context) {
        const result = await CollectController.deleteCollect(ctx.request.body);
        ctx.body = result;
    };

    // 查找
    public static async findCollect(ctx: Context) {
        const result: any = await CollectController.findCollect(ctx.query);
        if (result) {
            ctx.body = result;
        };
    };
};