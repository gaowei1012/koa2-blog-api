"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoDB_1 = require("../mongoDB");
var InfoSchema = new mongoDB_1.Schema({
    // 访问次数
    access: { type: Number, default: 0 },
    acessData: Array,
    // 作者头像
    authorImg: String,
    // 数据
    data: Array,
    // github
    guthub: String,
    // 作者名字
    name: String,
    // 介绍自己
    present: String
});
var Info = mongoDB_1.DB.model('Info', InfoSchema);
exports.default = Info;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mby5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtb2RlbHMvSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUV4QyxJQUFNLFVBQVUsR0FBRyxJQUFJLGdCQUFNLENBQUM7SUFDMUIsT0FBTztJQUNQLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUNwQyxTQUFTLEVBQUUsS0FBSztJQUVoQixPQUFPO0lBQ1AsU0FBUyxFQUFFLE1BQU07SUFFakIsS0FBSztJQUNMLElBQUksRUFBRSxLQUFLO0lBRVgsU0FBUztJQUNULE1BQU0sRUFBRSxNQUFNO0lBRWQsT0FBTztJQUNQLElBQUksRUFBRSxNQUFNO0lBRVosT0FBTztJQUNQLE9BQU8sRUFBRSxNQUFNO0NBRWxCLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLFlBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTFDLGtCQUFlLElBQUksQ0FBQyJ9