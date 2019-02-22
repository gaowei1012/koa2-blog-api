"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoDB_1 = require("../mongoDB");
var CollectSchema = new mongoDB_1.Schema({
    // 收藏内容
    content: String,
    // 创建时间
    create_at: Date,
    // 收藏标签
    tag: Object,
    // 收藏标题
    title: String
});
var Collect = mongoDB_1.DB.model('Collect', CollectSchema);
exports.default = Collect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtb2RlbHMvQ29sbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUV4QyxJQUFNLGFBQWEsR0FBRyxJQUFJLGdCQUFNLENBQUM7SUFDN0IsT0FBTztJQUNQLE9BQU8sRUFBRSxNQUFNO0lBRWYsT0FBTztJQUNQLFNBQVMsRUFBRSxJQUFJO0lBRWYsT0FBTztJQUNQLEdBQUcsRUFBRSxNQUFNO0lBRVgsT0FBTztJQUNQLEtBQUssRUFBRSxNQUFNO0NBQ2hCLENBQUMsQ0FBQztBQUVILElBQU0sT0FBTyxHQUFHLFlBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRW5ELGtCQUFlLE9BQU8sQ0FBQyJ9