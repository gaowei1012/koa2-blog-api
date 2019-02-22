"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var koa_jwt_1 = __importDefault(require("koa-jwt"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var config_1 = require("./config");
var errorHandle_1 = __importDefault(require("./middleware/errorHandle"));
var router_1 = __importDefault(require("./router"));
var app = new koa_1.default();
app
    .use(koa2_cors_1.default({
    allowHeaders: ['Content-Type', 'Authorzation', 'Accept'],
    allowMethods: ['GET', 'POST', 'DELETE'],
    credentials: true,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    origin: function () { return '*'; }
}))
    .use(errorHandle_1.default) // 错误处理中间件
    .use(koa_jwt_1.default({ secret: config_1.admin }).unless({
    path: [/\get/, '/api/login', '/api/update-user']
}))
    .use(koa_bodyparser_1.default())
    .use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.listen(8090, function () {
    console.log("server listen started 8090");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBc0I7QUFDdEIsa0VBQXdDO0FBQ3hDLG9EQUEwQjtBQUMxQix3REFBNkI7QUFDN0IsbUNBQWlDO0FBQ2pDLHlFQUFtRDtBQUNuRCxvREFBOEI7QUFDOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQztBQUV0QixHQUFHO0tBQ0UsR0FBRyxDQUNBLG1CQUFJLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQztJQUN4RCxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztJQUN2QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQztJQUMzRCxNQUFNLEVBQUUsQ0FBQztJQUNULE1BQU0sRUFBRSxjQUFNLE9BQUEsR0FBRyxFQUFILENBQUc7Q0FDcEIsQ0FBQyxDQUNMO0tBQ0EsR0FBRyxDQUFFLHFCQUFXLENBQUUsQ0FBQyxVQUFVO0tBQzdCLEdBQUcsQ0FDQSxpQkFBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlCLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLENBQUM7Q0FDbkQsQ0FBQyxDQUFDO0tBQ0YsR0FBRyxDQUFDLHdCQUFVLEVBQUUsQ0FBQztLQUNqQixHQUFHLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNwQixHQUFHLENBQUMsZ0JBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBRWpDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDIn0=