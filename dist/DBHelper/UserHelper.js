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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var config_1 = require("../config");
var models_1 = require("../models");
;
var InfoHelper = /** @class */ (function () {
    function InfoHelper() {
    }
    // 更新用户为 guest(普通用户)
    InfoHelper.updateUser = function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.User.find({
                        password: 'guest',
                        username: 'guest'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    }); };
    // 登录
    InfoHelper.findUser = function (user) { return __awaiter(_this, void 0, void 0, function () {
        var response, userName, _id, token, userName, _id, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.User.findOne({ userName: user.username })];
                case 1:
                    response = _a.sent();
                    if (!response) {
                        return [2 /*return*/, { message: '用户名不正确', type: 'error' }];
                    }
                    else if (user.password !== response.password) {
                        return [2 /*return*/, { message: '密码不正确' }];
                    }
                    else if (response.userName === 'admin') {
                        userName = response.userName, _id = response._id;
                        token = jwt.sign({ _id: _id }, config_1.admin);
                        return [2 /*return*/, {
                                message: '欢迎回来, 管理员',
                                user: { userName: userName, _id: _id, token: token }
                            }];
                    }
                    else {
                        userName = response.userName, _id = response._id;
                        token = jwt.sign({ _id: _id }, config_1.guest);
                        return [2 /*return*/, {
                                message: '游客登录成功',
                                user: { userName: userName, _id: _id, token: token }
                            }];
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
    return InfoHelper;
}());
exports.default = InfoHelper;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJEQkhlbHBlci9Vc2VySGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkE0Q0U7O0FBNUNGLGdEQUFvQztBQUNwQyxvQ0FBeUM7QUFDekMsb0NBQWlDO0FBTWhDLENBQUM7QUFFRjtJQUFBO0lBa0NBLENBQUM7SUFqQ0csb0JBQW9CO0lBQ04scUJBQVUsR0FBRzs7Ozt3QkFDTixxQkFBTSxhQUFJLENBQUMsSUFBSSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLE9BQU87cUJBQ3BCLENBQUMsRUFBQTs7b0JBSEksUUFBUSxHQUFHLFNBR2Y7b0JBQ0Ysc0JBQU8sUUFBUSxFQUFDOzs7U0FDbkIsQ0FBQztJQUVGLEtBQUs7SUFDUyxtQkFBUSxHQUFHLFVBQU8sSUFBVzs7Ozt3QkFDakIscUJBQU0sYUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBQTs7b0JBQS9ELFFBQVEsR0FBUSxTQUErQztvQkFFckUsSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDWCxzQkFBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFDO3FCQUMvQzt5QkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRTt3QkFDNUMsc0JBQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUM7cUJBQy9CO3lCQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7d0JBQzlCLFFBQVEsR0FBVSxRQUFRLFNBQWxCLEVBQUUsR0FBRyxHQUFLLFFBQVEsSUFBYixDQUFjO3dCQUM3QixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsY0FBSyxDQUFDLENBQUM7d0JBQ3ZDLHNCQUFRO2dDQUNKLE9BQU8sRUFBRSxXQUFXO2dDQUNwQixJQUFJLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTs2QkFDakMsRUFBQztxQkFDTDt5QkFBTTt3QkFDSyxRQUFRLEdBQVUsUUFBUSxTQUFsQixFQUFFLEdBQUcsR0FBSyxRQUFRLElBQWIsQ0FBYzt3QkFDN0IsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxFQUFFLGNBQUssQ0FBQyxDQUFDO3dCQUN2QyxzQkFBTztnQ0FDSCxPQUFPLEVBQUUsUUFBUTtnQ0FDakIsSUFBSSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUU7NkJBQ2pDLEVBQUM7cUJBQ0w7b0JBQUEsQ0FBQzs7OztTQUNMLENBQUM7SUFDTixpQkFBQztDQUFBLEFBbENELElBa0NDO2tCQWxDb0IsVUFBVTtBQWtDOUIsQ0FBQyJ9