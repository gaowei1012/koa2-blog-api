"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoDB_1 = require("../mongoDB");
var UserSchema = new mongoDB_1.Schema({
    // 密码
    password: String,
    // 用户名
    userName: String,
});
var User = mongoDB_1.DB.model('user', UserSchema);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtb2RlbHMvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUV4QyxJQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFNLENBQUM7SUFDMUIsS0FBSztJQUNMLFFBQVEsRUFBRSxNQUFNO0lBRWhCLE1BQU07SUFDTixRQUFRLEVBQUUsTUFBTTtDQUVuQixDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBRyxZQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUUxQyxrQkFBZSxJQUFJLENBQUMifQ==