import { Article, Info } from '../models';

// 定义接口
interface IQuery {
    pageIndex: string,
    pageSize: string,
    tagTitle: string,
    title: string,
    type: string,
    nature: string
};

interface IArticle {
    _id?: string,
    tag: string,
    create_at: string
};

// 定义tag的颜色
const tagColors: string[] = [
    '#87d068',
    '#108ee9',
    '#6b61f0',
    '#f8a72a',
    '#fe5500',
    '#2db7f5',
];

// 定义article类
export default class ArticleHelper {
    // 查询文章页
    public static findArticles = async (query: IQuery) => {
        const { pageSize, pageIndex, tagTitle, title, type, nature } = query;
        let data: object = {};
        if (title) {
            data = { title: new RegExp(title) };
        }
        if (tagTitle) {
            data = { ...data, 'tag.title': tagTitle };
        }
        if (nature) {
            data = { ...data, type };
        }
        
        const Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) - Number.parseInt(pageSize);

        const articles = await Article.find(data)
                            .sort({create_at: -1})
                            .limit(Number.parseInt(pageSize))
                            .skip(Skip);
        const total = await Article.count({}, (err: string, count: number) => {
            if (err) {
                return false;
            } else {
                return count;
            }
        });
        return { total, articles };
    };

    // 查询文章详情
    public static findArticleById = async (id: string) => {
        const article: any = await Article.findById(id);
        await Article.update({_id: article._id}, {access: ++article.access});
        return article;
    };

    // 添加文章
    public static createArticle = async (article: IArticle) => {
        const tag = {
            color: tagColors[Math.floor(Math.random() * 6)],
            title: article.tag
        };
        const response = await Article.create(
            { ...article, tag, create_at: new Date()},
            (error: string, doc: object) => {
                if (error) {
                    throw error;
                } else {
                    return doc;
                }
            }
        );
        const info: any = await Info.find({});
        if (Array.isArray(info[0].data)) {
            info[0].data.forEach((item: any) => {
                if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                    item.article += 1;
                }
            });
            await Info.update({_id: info[0]._id}, {data: info[0].data});
        }
        return response;
    };

    // 删除文章
    public static deleteArticleById = async (id: string) => {
        return await Article.remove({_id: id});
    }

    // 更新一篇文章
    public static updateArticleById = async (article: IArticle) => {
        const tag = {
            color: tagColors[Math.floor(Math.random() * 6)],
            title: article.tag
        };
        const response = await Article.update(
            {_id: article._id},
            {...article, tag}
        );
        return response;
    }

}