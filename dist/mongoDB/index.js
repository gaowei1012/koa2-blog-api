"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var config_1 = require("../config");
;
mongoose.Promise = global.Promise;
// 导出所需的对象
exports.DB = mongoose;
exports.Schema = exports.DB.Schema;
// 数据库
exports.connect = function () {
    exports.DB.connect(config_1.DBpath);
    exports.DB.connection.on('error', function (error) {
        console.log(error);
    });
    exports.DB.connection.once('open', function () {
        console.log("\u6570\u636E\u5E93\u8FDE\u63A5\u6210\u529F!");
    });
    return exports.DB;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsibW9uZ29EQi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpREFBcUM7QUFDckMsb0NBQW1DO0FBQ25DLENBQUM7QUFBQyxRQUFnQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBRTVDLFVBQVU7QUFDRyxRQUFBLEVBQUUsR0FBRyxRQUFRLENBQUM7QUFDWixRQUFBLE1BQU0sR0FBSyxVQUFFLFFBQUM7QUFFN0IsTUFBTTtBQUNPLFFBQUEsT0FBTyxHQUFHO0lBQ25CLFVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbkIsVUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBVTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQVUsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxVQUFFLENBQUM7QUFDZCxDQUFDLENBQUMifQ==