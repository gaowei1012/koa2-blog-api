import { Context } from 'koa';
import * as DBHelper from '../DBHelper';
const { findInfo, findAdminInfo } = DBHelper.InfoHelper;

export default class InfoController {

    public static async findInfo(ctx: Context) {
        const result = await findInfo();
        console.log(result);
        ctx.body = result;
    };

    public static async findAdminInfo(ctx: Context) {
        const result = await findAdminInfo();
        ctx.body =  result;
    };
};