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
var CollectHelper = /** @class */ (function () {
    function CollectHelper() {
    }
    // 查询收藏
    CollectHelper.findCollect = function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var pageIndex, pageSize, Skip, collect, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageIndex = payload.pageIndex, pageSize = payload.pageSize;
                    Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) - Number.parseInt(pageSize);
                    return [4 /*yield*/, models_1.Collect.find({})
                            .sort({ create_at: -1 })
                            .limit(Number.parseInt(pageSize))
                            .skip(Skip)];
                case 1:
                    collect = _a.sent();
                    return [4 /*yield*/, models_1.Collect.count({})];
                case 2:
                    total = _a.sent();
                    return [2 /*return*/, { collect: collect, total: total }];
            }
        });
    }); };
    // 删除收藏
    CollectHelper.deleteCollect = function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Collect.remove(payload)];
                case 1:
                    response = _a.sent();
                    if (response === 1) {
                        return [2 /*return*/, { message: '删除成功' }];
                    }
                    else {
                        return [2 /*return*/, { message: '删除失败', type: 'error' }];
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    // 添加收藏
    CollectHelper.addCollect = function (say) { return __awaiter(_this, void 0, void 0, function () {
        var response, info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Collect.create(__assign({}, say, { create_at: Date.now() }))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, models_1.Info.find({})];
                case 2:
                    info = _a.sent();
                    if (!Array.isArray(info[0].data)) return [3 /*break*/, 4];
                    info[0].data.forEach(function (item) {
                        if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                            item.collect += 1;
                        }
                        ;
                    });
                    return [4 /*yield*/, info.update({ _id: info[0]._id }, { data: info[0].data })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (response) {
                        return [2 /*return*/, { message: '添加收藏成功' }];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return CollectHelper;
}());
exports.default = CollectHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJEQkhlbHBlci9Db2xsZWN0SGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBaURDOztBQWpERCxvQ0FBMEM7QUFPekMsQ0FBQztBQUVGO0lBQUE7SUF3Q0EsQ0FBQztJQXZDRyxPQUFPO0lBQ08seUJBQVcsR0FBRyxVQUFPLE9BQWlCOzs7OztvQkFDeEMsU0FBUyxHQUFlLE9BQU8sVUFBdEIsRUFBRSxRQUFRLEdBQUssT0FBTyxTQUFaLENBQWE7b0JBQ2xDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEYscUJBQU0sZ0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzZCQUNqQixJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQzs2QkFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7NkJBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBSHpCLE9BQU8sR0FBRyxTQUdlO29CQUNqQixxQkFBTSxnQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBQTs7b0JBQS9CLEtBQUssR0FBRyxTQUF1QjtvQkFDckMsc0JBQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFDOzs7U0FDN0IsQ0FBQztJQUVGLE9BQU87SUFDTywyQkFBYSxHQUFHLFVBQU8sT0FBaUI7Ozs7d0JBQ2pDLHFCQUFNLGdCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztvQkFBeEMsUUFBUSxHQUFHLFNBQTZCO29CQUM5QyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7d0JBQ2hCLHNCQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDO3FCQUM5Qjt5QkFBTTt3QkFDSCxzQkFBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFDO3FCQUM3QztvQkFBQSxDQUFDOzs7O1NBQ0wsQ0FBQztJQUVGLE9BQU87SUFDTyx3QkFBVSxHQUFHLFVBQU8sR0FBVzs7Ozt3QkFDeEIscUJBQU0sZ0JBQU8sQ0FBQyxNQUFNLGNBQUssR0FBRyxJQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUUsRUFBQTs7b0JBQWhFLFFBQVEsR0FBRyxTQUFxRDtvQkFDcEQscUJBQU0sYUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQTs7b0JBQS9CLElBQUksR0FBUSxTQUFtQjt5QkFFakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQTNCLHdCQUEyQjtvQkFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO3dCQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUMzRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzt5QkFDckI7d0JBQUEsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztvQkFDSCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBQTs7b0JBQS9ELFNBQStELENBQUM7OztvQkFFcEUsSUFBSSxRQUFRLEVBQUU7d0JBQ1Ysc0JBQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUM7cUJBQ2hDOzs7O1NBQ0osQ0FBQztJQUNOLG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7a0JBeENvQixhQUFhIn0=