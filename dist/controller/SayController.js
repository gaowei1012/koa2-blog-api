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
var SayHelper = DBHelper.SayHelper;
var SayController = /** @class */ (function () {
    function SayController() {
    }
    SayController.addSay = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SayHelper.addSay(ctx.request.body)];
                    case 1:
                        result = _a.sent();
                        ctx.body = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SayController.deleteSay = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SayHelper.deleteSay(ctx.request.body)];
                    case 1:
                        result = _a.sent();
                        ctx.body = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    SayController.findSay = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SayHelper.findSay(ctx.query)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            ctx.body = result;
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return SayController;
}());
exports.default = SayController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL1NheUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBd0M7QUFDaEMsSUFBQSw4QkFBUyxDQUFjO0FBRS9CO0lBQUE7SUFrQkEsQ0FBQztJQWhCdUIsb0JBQU0sR0FBMUIsVUFBMkIsR0FBWTs7Ozs7NEJBQ3BCLHFCQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWpELE1BQU0sR0FBRyxTQUF3Qzt3QkFDdkQsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Ozs7O0tBQ3JCO0lBQUEsQ0FBQztJQUVrQix1QkFBUyxHQUE3QixVQUE4QixHQUFZOzs7Ozs0QkFDdkIscUJBQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBcEQsTUFBTSxHQUFHLFNBQTJDO3dCQUMxRCxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQzs7Ozs7S0FDckI7SUFBQSxDQUFDO0lBRWtCLHFCQUFPLEdBQTNCLFVBQTRCLEdBQVk7Ozs7OzRCQUNyQixxQkFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTNDLE1BQU0sR0FBRyxTQUFrQzt3QkFDakQsSUFBSSxNQUFNLEVBQUU7NEJBQ1IsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7eUJBQ3JCO3dCQUFBLENBQUM7Ozs7O0tBQ0w7SUFBQSxDQUFDO0lBQ04sb0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDOztBQUFBLENBQUMifQ==