import * as mongoose from 'mongoose';
import { DBpath } from '../config';
;(mongoose as any).Promise = global.Promise;

// 导出所需的对象
export const DB = mongoose;
export const { Schema } = DB;

// 数据库
export const connect = () => {
    DB.connect(DBpath);

    DB.connection.on('error', (error: any) => {
        console.log(error)
    });

    DB.connection.once('open', () => {
        console.log(`数据库连接成功!`)
    });

    return DB;
};
