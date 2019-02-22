import * as jwt from 'jsonwebtoken';
import { admin, guest } from '../config';
import { User } from '../models';


interface IUser {
    username?: string,
    password?: string
};

export default class InfoHelper {
    // 更新用户为 guest(普通用户)
    public static updateUser = async () => {
        const response = await User.find({
            password: 'guest',
            username: 'guest'
        });
        return response;
    };

    // 登录
    public static findUser = async (user: IUser) => {
        const response: any = await User.findOne({ userName: user.username });

        if (!response) {
            return { message: '用户名不正确', type: 'error' };
        } else if (user.password !== response.password) {
            return { message: '密码不正确' };
        } else if (response.userName === 'admin') {
            const { userName, _id } = response;
            const token = jwt.sign({ _id }, admin);
            return  {
                message: '欢迎回来, 管理员',
                user: { userName, _id, token }
            };
        } else {
            const { userName, _id } = response;
            const token = jwt.sign({ _id }, guest);
            return {
                message: '游客登录成功',
                user: { userName, _id, token }
            };
        };
    };
};