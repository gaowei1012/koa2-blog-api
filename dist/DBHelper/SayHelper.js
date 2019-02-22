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
var SayHelper = /** @class */ (function () {
    function SayHelper() {
    }
    // 查找
    SayHelper.findSay = function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var pageIndex, pageSize, Skip, say, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageIndex = payload.pageIndex, pageSize = payload.pageSize;
                    Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) - Number.parseInt(pageSize);
                    return [4 /*yield*/, models_1.Say.count({})
                            .sort({ create_at: -1 })
                            .limit(Number.parseInt(pageSize))
                            .skip(Skip)];
                case 1:
                    say = _a.sent();
                    return [4 /*yield*/, models_1.Say.count({})];
                case 2:
                    total = _a.sent();
                    return [2 /*return*/, { say: say, total: total }];
            }
        });
    }); };
    // 删除
    SayHelper.deleteSay = function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Say.remove(payload)];
                case 1:
                    response = _a.sent();
                    if (response.ok === 1) {
                        return [2 /*return*/, { message: '删除成功' }];
                    }
                    else {
                        return [2 /*return*/, { message: '删除失败' }];
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    // 添加
    SayHelper.addSay = function (say) { return __awaiter(_this, void 0, void 0, function () {
        var response, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Say.create(__assign({}, say, { create_at: Date.now() }))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, models_1.Info.find({})];
                case 2:
                    info = _a.sent();
                    if (!Array.isArray(info[0].data)) return [3 /*break*/, 4];
                    info[0].data.forEach(function (item) {
                        if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                            item.say += 1;
                        }
                        ;
                    });
                    return [4 /*yield*/, models_1.Info.update({ _id: info[0]._id }, { data: info[0].data })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ;
                    if (response) {
                        return [2 /*return*/, { message: '发表说说成功' }];
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    return SayHelper;
}());
exports.default = SayHelper;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5SGVscGVyLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbIkRCSGVscGVyL1NheUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWdERTs7QUFoREYsb0NBQXNDO0FBTXJDLENBQUM7QUFFRjtJQUFBO0lBd0NBLENBQUM7SUF2Q0csS0FBSztJQUNTLGlCQUFPLEdBQUcsVUFBTyxPQUFpQjs7Ozs7b0JBQ3BDLFNBQVMsR0FBZSxPQUFPLFVBQXRCLEVBQUUsUUFBUSxHQUFLLE9BQU8sU0FBWixDQUFhO29CQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BGLHFCQUFNLFlBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzZCQUNWLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDOzZCQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFIekIsR0FBRyxHQUFHLFNBR21CO29CQUNqQixxQkFBTSxZQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQkFBM0IsS0FBSyxHQUFHLFNBQW1CO29CQUNqQyxzQkFBTyxFQUFDLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLEVBQUM7OztTQUN2QixDQUFDO0lBRUYsS0FBSztJQUNTLG1CQUFTLEdBQUcsVUFBTyxPQUFpQjs7Ozt3QkFDN0IscUJBQU0sWUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs7b0JBQXBDLFFBQVEsR0FBRyxTQUF5QjtvQkFDMUMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDbkIsc0JBQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUM7cUJBQzlCO3lCQUFNO3dCQUNILHNCQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDO3FCQUM5QjtvQkFBQSxDQUFDOzs7O1NBQ0wsQ0FBQztJQUVGLEtBQUs7SUFDUyxnQkFBTSxHQUFHLFVBQU8sR0FBVzs7Ozt3QkFDcEIscUJBQU0sWUFBRyxDQUFDLE1BQU0sY0FBTSxHQUFHLElBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBRyxFQUFBOztvQkFBOUQsUUFBUSxHQUFHLFNBQW1EO29CQUNsRCxxQkFBTSxhQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFBOztvQkFBL0IsSUFBSSxHQUFRLFNBQW1CO3lCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBM0Isd0JBQTJCO29CQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7d0JBQzNCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUU7NEJBQzNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO3lCQUNqQjt3QkFBQSxDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO29CQUNILHFCQUFNLGFBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFBOztvQkFBL0QsU0FBK0QsQ0FBQzs7O29CQUNuRSxDQUFDO29CQUNGLElBQUksUUFBUSxFQUFFO3dCQUNWLHNCQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFDO3FCQUNoQztvQkFBQSxDQUFDOzs7O1NBQ0wsQ0FBQztJQUVOLGdCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7a0JBeENvQixTQUFTO0FBd0M3QixDQUFDIn0=