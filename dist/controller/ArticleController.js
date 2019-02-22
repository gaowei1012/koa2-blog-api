"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DBHelper = __importStar(require("../DBHelper"));
var _a = DBHelper.ArticleHelper, findArticles = _a.findArticles, findArticleById = _a.findArticleById, createArticle = _a.createArticle, deleteArticleById = _a.deleteArticleById, updateArticleById = _a.updateArticleById;
// articler controller
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    // articles
    ArticleController.articles = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, pageIndex, pageSize, timeFile, response, articles, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ctx.query, pageIndex = _a.pageIndex, pageSize = _a.pageSize, timeFile = _a.timeFile;
                        return [4 /*yield*/, findArticles(ctx.query)];
                    case 1:
                        response = _b.sent();
                        articles = response.articles, total = response.total;
                        if (timeFile) {
                            ctx.body = {
                                articles: articles.map(function (item) {
                                    var _a = item._doc, _id = _a._id, create_at = _a.create_at, title = _a.title;
                                    return { _id: _id, create_at: create_at, title: title };
                                }),
                                total: total,
                            };
                        }
                        else {
                            ctx.body = {
                                articles: articles,
                                total: total
                            };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    // article
    ArticleController.article = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var Article;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, findArticleById(ctx.query.Id)];
                    case 1:
                        Article = _a.sent();
                        ctx.body = Article;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    //发表文章
    ArticleController.addArticle = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = createArticle(ctx.request.body);
                if (response) {
                    ctx.body = { message: '文发表成功' };
                }
                else {
                    ctx.body = { message: '操作失败' };
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    // 删除一篇文章
    ArticleController.deleteArticle = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, deleteArticleById(ctx.request.body)];
                    case 1:
                        response = _a.sent();
                        if (response === 1) {
                            ctx.body = { message: '删除文章成功' };
                        }
                        else {
                            ctx.body = { message: '删除失败' };
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    // 更新一篇文章
    ArticleController.updateArticle = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, updateArticleById(ctx.request.body)];
                    case 1:
                        response = _a.sent();
                        if (response === 1) {
                            ctx.body = { message: '文章删除成功' };
                        }
                        else {
                            ctx.body = { message: '文章删除失败' };
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return ArticleController;
}());
exports.default = ArticleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlci9BcnRpY2xlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUF3QztBQUNsQyxJQUFBLDJCQU1vQixFQUx0Qiw4QkFBWSxFQUNaLG9DQUFlLEVBQ2YsZ0NBQWEsRUFDYix3Q0FBaUIsRUFDakIsd0NBQ3NCLENBQUM7QUFFM0Isc0JBQXNCO0FBQ3RCO0lBQUE7SUF5REEsQ0FBQztJQXhERyxXQUFXO0lBQ1MsMEJBQVEsR0FBNUIsVUFBNkIsR0FBWTs7Ozs7O3dCQUMvQixLQUFvQyxHQUFHLENBQUMsS0FBSyxFQUEzQyxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUEsQ0FBZTt3QkFDbkMscUJBQU0sWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLFFBQVEsR0FBRyxTQUE2Qjt3QkFDdEMsUUFBUSxHQUFZLFFBQVEsU0FBcEIsRUFBRSxLQUFLLEdBQUssUUFBUSxNQUFiLENBQWM7d0JBQ3JDLElBQUksUUFBUSxFQUFFOzRCQUNWLEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTO29DQUN2QixJQUFBLGNBQXFDLEVBQW5DLFlBQUcsRUFBRSx3QkFBUyxFQUFFLGdCQUFtQixDQUFDO29DQUM1QyxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztnQ0FDckMsQ0FBQyxDQUFDO2dDQUNGLEtBQUssT0FBQTs2QkFDUixDQUFDO3lCQUNMOzZCQUFNOzRCQUNILEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0NBQ1AsUUFBUSxVQUFBO2dDQUNSLEtBQUssT0FBQTs2QkFDUixDQUFDO3lCQUNMOzs7OztLQUNKO0lBQUEsQ0FBQztJQUVGLFVBQVU7SUFDVSx5QkFBTyxHQUEzQixVQUE0QixHQUFZOzs7Ozs0QkFDcEIscUJBQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUE3QyxPQUFPLEdBQUcsU0FBbUM7d0JBQ25ELEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDOzs7OztLQUN0QjtJQUFBLENBQUM7SUFFRixNQUFNO0lBQ2MsNEJBQVUsR0FBOUIsVUFBK0IsR0FBWTs7OztnQkFDakMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLFFBQVEsRUFBRTtvQkFDVixHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDO2lCQUNqQzs7OztLQUNKO0lBQUEsQ0FBQztJQUVGLFNBQVM7SUFDVywrQkFBYSxHQUFqQyxVQUFrQyxHQUFZOzs7Ozs0QkFDekIscUJBQU0saUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXBELFFBQVEsR0FBRyxTQUF5Qzt3QkFDMUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFOzRCQUNoQixHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO3lCQUNwQzs2QkFBTTs0QkFDSCxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUNsQzt3QkFBQSxDQUFDOzs7OztLQUNMO0lBQUEsQ0FBQztJQUVGLFNBQVM7SUFDVywrQkFBYSxHQUFqQyxVQUFrQyxHQUFZOzs7Ozs0QkFDekIscUJBQU0saUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXBELFFBQVEsR0FBRyxTQUF5Qzt3QkFDMUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFOzRCQUNoQixHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFBO3lCQUNuQzs2QkFBTTs0QkFDSCxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO3lCQUNwQzs7Ozs7S0FDSjtJQUFBLENBQUM7SUFDTix3QkFBQztBQUFELENBQUMsQUF6REQsSUF5REMifQ==