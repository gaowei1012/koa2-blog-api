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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var models_1 = require("../models");
var InfoHelper = /** @class */ (function () {
    function InfoHelper() {
    }
    // 博客首页数据
    InfoHelper.findInfo = function () { return __awaiter(_this, void 0, void 0, function () {
        var articles, tag, info, ArticleNum, lastArticle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Article.find({}, { _id: 1, tag: 1, title: 1 })];
                case 1:
                    articles = _a.sent();
                    tag = _.uniqBy(articles.map(function (item) { return item.tag; }), 'title');
                    return [4 /*yield*/, models_1.Info.find({})];
                case 2:
                    info = _a.sent();
                    return [4 /*yield*/, models_1.Article.count({})];
                case 3:
                    ArticleNum = _a.sent();
                    if (Array.isArray(info[0].accessData)) {
                        info[0].accessData.forEach(function (item) {
                            if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                                item.value += 1;
                            }
                        });
                    }
                    ;
                    return [4 /*yield*/, models_1.Info.update({ _id: info[0]._id }, { access: ++info[0].access, accessData: info[0].accessData })];
                case 4:
                    _a.sent();
                    lastArticle = articles.filter(function (item, index) { return index < 10; })
                        .map(function (item) { return ({ _id: item.id, title: item.title }); });
                    return [2 /*return*/, __assign({}, info[0]._doc, { tag: tag, lastArticle: lastArticle, ArticleNum: ArticleNum })];
            }
        });
    }); };
    // 博客后端管理首页数据
    InfoHelper.findAdminInfo = function () { return __awaiter(_this, void 0, void 0, function () {
        var articleNumber, articles, lastArticle, sayNumber, says, lastSay, collectNumber, collects, lastCollect, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Article.count({})];
                case 1:
                    articleNumber = _a.sent();
                    return [4 /*yield*/, models_1.Article.find({}).sort({ create_at: -1 })];
                case 2:
                    articles = _a.sent();
                    lastArticle = articles[0];
                    return [4 /*yield*/, models_1.Say.count({})];
                case 3:
                    sayNumber = _a.sent();
                    return [4 /*yield*/, models_1.Say.find({}).sort({ create_at: -1 }).limit(1)];
                case 4:
                    says = _a.sent();
                    lastSay = says[0];
                    return [4 /*yield*/, models_1.Collect.count({})];
                case 5:
                    collectNumber = _a.sent();
                    return [4 /*yield*/, models_1.Collect.find({}).sort({ create_at: -1 }).limit(1)];
                case 6:
                    collects = _a.sent();
                    lastCollect = collects[0];
                    return [4 /*yield*/, models_1.Info.find({}).sort({}).limit(1)];
                case 7:
                    info = _a.sent();
                    return [2 /*return*/, {
                            access: info[0].access,
                            accessData: info[0].accessData,
                            articleNumber: articleNumber,
                            collectNumber: collectNumber,
                            data: info[0].data,
                            lastArticle: lastArticle,
                            lastCollect: lastCollect,
                            lastSay: lastSay,
                            sayNumber: sayNumber
                        }];
            }
        });
    }); };
    return InfoHelper;
}());
exports.default = InfoHelper;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb0hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJEQkhlbHBlci9JbmZvSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWtERTs7QUFsREYsd0NBQTRCO0FBQzVCLG9DQUF3RDtBQUV4RDtJQUFBO0lBK0NBLENBQUM7SUE5Q0csU0FBUztJQUNLLG1CQUFRLEdBQUc7Ozs7d0JBQ0cscUJBQU0sZ0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQkFBdEUsUUFBUSxHQUFVLFNBQW9EO29CQUN0RSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsRUFBUixDQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDNUMscUJBQU0sYUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQTs7b0JBQS9CLElBQUksR0FBUSxTQUFtQjtvQkFDbEIscUJBQU0sZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUE7O29CQUFwQyxVQUFVLEdBQUcsU0FBdUI7b0JBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUzs0QkFDakMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFH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