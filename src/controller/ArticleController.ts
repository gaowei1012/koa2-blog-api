import { Context } from 'koa';
import * as DBHelper from '../DBHelper';
const {
    findArticles,
    findArticleById,
    createArticle,
    deleteArticleById,
    updateArticleById
} = DBHelper.ArticleHelper;

// articler controller
export default class ArticleController {
    // articles
    public static async articles(ctx: Context) {
        const { pageIndex, pageSize, timeFile } = ctx.query;
        const response = await findArticles(ctx.query);
        const { articles, total } = response;
        if (timeFile) {
            ctx.body = {
                articles: articles.map((item: any) => {
                    const { _id, create_at, title } = item._doc;
                    return { _id, create_at, title };
                }),
                total,
            };
        } else {
            ctx.body = {
                articles,
                total
            };
        }
    };

    // article
    public static async article(ctx: Context) {
        const Article = await findArticleById(ctx.query.Id);
        ctx.body = Article;
    };

    //发表文章
    public static async addArticle(ctx: Context) {
        const response = createArticle(ctx.request.body);
        if (response) {
            ctx.body = { message: '文发表成功'};
        } else {
            ctx.body = { message: '操作失败'};
        }
    };

    // 删除一篇文章
    public static async deleteArticle(ctx: Context) {
        const response = await deleteArticleById(ctx.request.body);
        if (response === 1) {
            ctx.body = { message: '删除文章成功' };
        } else {
            ctx.body = { message: '删除失败' };
        };
    };

    // 更新一篇文章
    public static async updateArticle(ctx: Context) {
        const response = await updateArticleById(ctx.request.body);
        if (response === 1) {
            ctx.body = { message: '文章删除成功' }
        } else {
            ctx.body = { message: '文章删除失败' };
        }
    };
}