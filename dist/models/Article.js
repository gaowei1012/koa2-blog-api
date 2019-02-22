"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoDB_1 = require("../mongoDB");
var ArticleSchema = new mongoDB_1.Schema({
    // 简介
    abstract: String,
    // 访问次数
    access: { type: Number, default: 0 },
    // 内容
    content: String,
    // 创建时间
    create_at: Date,
    // 原创或转载
    nature: String,
    // 文章标签
    tag: Object,
    // 标题
    title: mongoDB_1.Schema.Types.Mixed,
    // 文章类型
    type: String
});
var Article = mongoDB_1.DB.model('Article', ArticleSchema);
exports.default = Article;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZS5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtb2RlbHMvQXJ0aWNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUV4QyxJQUFNLGFBQWEsR0FBRyxJQUFJLGdCQUFNLENBQUM7SUFDN0IsS0FBSztJQUNMLFFBQVEsRUFBRSxNQUFNO0lBRWhCLE9BQU87SUFDUCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7SUFFcEMsS0FBSztJQUNMLE9BQU8sRUFBRSxNQUFNO0lBRWYsT0FBTztJQUNQLFNBQVMsRUFBRSxJQUFJO0lBRWYsUUFBUTtJQUNSLE1BQU0sRUFBRSxNQUFNO0lBRWQsT0FBTztJQUNQLEdBQUcsRUFBRSxNQUFNO0lBRVgsS0FBSztJQUNMLEtBQUssRUFBRSxnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBRXpCLE9BQU87SUFDUCxJQUFJLEVBQUUsTUFBTTtDQUVmLENBQUMsQ0FBQztBQUVILElBQU0sT0FBTyxHQUFHLFlBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRW5ELGtCQUFlLE9BQU8sQ0FBQyJ9