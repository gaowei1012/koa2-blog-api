"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
;
;
// 定义tag的颜色
var tagColors = [
    '#87d068',
    '#108ee9',
    '#6b61f0',
    '#f8a72a',
    '#fe5500',
    '#2db7f5',
];
// 定义article类
var ArticleHelper = /** @class */ (function () {
    function ArticleHelper() {
    }
    // 查询文章页
    ArticleHelper.findArticles = function (query) { return __awaiter(_this, void 0, void 0, function () {
        var pageSize, pageIndex, tagTitle, title, type, nature, data, Skip, articles, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageSize = query.pageSize, pageIndex = query.pageIndex, tagTitle = query.tagTitle, title = query.title, type = query.type, nature = query.nature;
                    data = {};
                    if (title) {
                        data = { title: new RegExp(title) };
                    }
                    if (tagTitle) {
                        data = __assign({}, data, { 'tag.title': tagTitle });
                    }
                    if (nature) {
                        data = __assign({}, data, { type: type });
                    }
                    Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) - Number.parseInt(pageSize);
                    return [4 /*yield*/, models_1.Article.find(data)
                            .sort({ create_at: -1 })
                            .limit(Number.parseInt(pageSize))
                            .skip(Skip)];
                case 1:
                    articles = _a.sent();
                    return [4 /*yield*/, models_1.Article.count({}, function (err, count) {
                            if (err) {
                                return false;
                            }
                            else {
                                return count;
                            }
                        })];
                case 2:
                    total = _a.sent();
                    return [2 /*return*/, { total: total, articles: articles }];
            }
        });
    }); };
    // 查询文章详情
    ArticleHelper.findArticleById = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var article;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Article.findById(id)];
                case 1:
                    article = _a.sent();
                    return [4 /*yield*/, models_1.Article.update({ _id: article._id }, { access: ++article.access })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, article];
            }
        });
    }); };
    // 添加文章
    ArticleHelper.createArticle = function (article) { return __awaiter(_this, void 0, void 0, function () {
        var tag, response, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tag = {
                        color: tagColors[Math.floor(Math.random() * 6)],
                        title: article.tag
                    };
                    return [4 /*yield*/, models_1.Article.create(__assign({}, article, { tag: tag, create_at: new Date() }), function (error, doc) {
                            if (error) {
                                throw error;
                            }
                            else {
                                return doc;
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, models_1.Info.find({})];
                case 2:
                    info = _a.sent();
                    if (!Array.isArray(info[0].data)) return [3 /*break*/, 4];
                    info[0].data.forEach(function (item) {
                        if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                            item.article += 1;
                        }
                    });
                    return [4 /*yield*/, models_1.Info.update({ _id: info[0]._id }, { data: info[0].data })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, response];
            }
        });
    }); };
    // 删除文章
    ArticleHelper.deleteArticleById = function (id) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Article.remove({ _id: id })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    // 更新一篇文章
    ArticleHelper.updateArticleById = function (article) { return __awaiter(_this, void 0, void 0, function () {
        var tag, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tag = {
                        color: tagColors[Math.floor(Math.random() * 6)],
                        title: article.tag
                    };
                    return [4 /*yield*/, models_1.Article.update({ _id: article._id }, __assign({}, article, { tag: tag }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    }); };
    return ArticleHelper;
}());
exports.default = ArticleHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJEQkhlbHBlci9BcnRpY2xlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBaUhDOztBQWpIRCxvQ0FBMEM7QUFVekMsQ0FBQztBQU1ELENBQUM7QUFFRixXQUFXO0FBQ1gsSUFBTSxTQUFTLEdBQWE7SUFDeEIsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1osQ0FBQztBQUVGLGFBQWE7QUFDYjtJQUFBO0lBb0ZBLENBQUM7SUFuRkcsUUFBUTtJQUNNLDBCQUFZLEdBQUcsVUFBTyxLQUFhOzs7OztvQkFDckMsUUFBUSxHQUErQyxLQUFLLFNBQXBELEVBQUUsU0FBUyxHQUFvQyxLQUFLLFVBQXpDLEVBQUUsUUFBUSxHQUEwQixLQUFLLFNBQS9CLEVBQUUsS0FBSyxHQUFtQixLQUFLLE1BQXhCLEVBQUUsSUFBSSxHQUFhLEtBQUssS0FBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7b0JBQ2pFLElBQUksR0FBVyxFQUFFLENBQUM7b0JBQ3RCLElBQUksS0FBSyxFQUFFO3dCQUNQLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO3FCQUN2QztvQkFDRCxJQUFJLFFBQVEsRUFBRTt3QkFDVixJQUFJLGdCQUFRLElBQUksSUFBRSxXQUFXLEVBQUUsUUFBUSxHQUFFLENBQUM7cUJBQzdDO29CQUNELElBQUksTUFBTSxFQUFFO3dCQUNSLElBQUksZ0JBQVEsSUFBSSxJQUFFLElBQUksTUFBQSxHQUFFLENBQUM7cUJBQzVCO29CQUVLLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENB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