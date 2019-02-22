import { DB, Schema } from '../mongoDB';

const UserSchema = new Schema({
    // 密码
    password: String,

    // 用户名
    userName: String,
    
});

const User = DB.model('user', UserSchema);

export default User;