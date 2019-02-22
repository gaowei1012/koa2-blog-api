"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var controller_1 = require("../controller");
var router = new koa_router_1.default();
router
    // 博客信息
    .get('/api/get-info', controller_1.InfoController.findInfo)
    .get('/api/get-admin-info', controller_1.InfoController.findAdminInfo)
    // 文章
    .get('/api/get-article', controller_1.ArticleController.article)
    .get('/api/get-articles', controller_1.ArticleController.articles)
    .post('/api/add-article', controller_1.ArticleController.addArticle)
    .post('/api/delete-article', controller_1.ArticleController.deleteArticle)
    .post('/api/update-article', controller_1.ArticleController.updateArticle)
    // 用户信息
    .post('/api/update-user', controller_1.UserController.updateUser)
    .post('/api/login', controller_1.UserController.login)
    // 说说
    .get('/api/get-say', controller_1.SayController.findSay)
    .post('/api/add-say', controller_1.SayController.addSay)
    .post('/api/delete-say', controller_1.SayController.deleteSay)
    // 收藏
    .get('/api/get-collect', controller_1.CollectController.findCollect)
    .post('/api/add-collect', controller_1.CollectController.addCollect)
    .post('/api/delete-collect', controller_1.CollectController.deleteCollect);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsicm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQW1DO0FBQ25DLDRDQU11QjtBQUV2QixJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFTLEVBQUUsQ0FBQztBQUUvQixNQUFNO0lBQ0YsT0FBTztLQUNOLEdBQUcsQ0FBQyxlQUFlLEVBQUUsMkJBQWMsQ0FBQyxRQUFRLENBQUM7S0FDN0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFLDJCQUFjLENBQUMsYUFBYSxDQUFDO0lBQ3pELEtBQUs7S0FDSixHQUFHLENBQUMsa0JBQWtCLEVBQUUsOEJBQWlCLENBQUMsT0FBTyxDQUFDO0tBQ2xELEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSw4QkFBaUIsQ0FBQyxRQUFRLENBQUM7S0FDcEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLDhCQUFpQixDQUFDLFVBQVUsQ0FBQztLQUN0RCxJQUFJLENBQUMscUJBQXFCLEVBQUUsOEJBQWlCLENBQUMsYUFBYSxDQUFDO0tBQzVELElBQUksQ0FBQyxxQkFBcUIsRUFBRSw4QkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFFN0QsT0FBTztLQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSwyQkFBYyxDQUFDLFVBQVUsQ0FBQztLQUNuRCxJQUFJLENBQUMsWUFBWSxFQUFFLDJCQUFjLENBQUMsS0FBSyxDQUFDO0lBRXpDLEtBQUs7S0FDSixHQUFHLENBQUMsY0FBYyxFQUFFLDBCQUFhLENBQUMsT0FBTyxDQUFDO0tBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUUsMEJBQWEsQ0FBQyxNQUFNLENBQUM7S0FDMUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDBCQUFhLENBQUMsU0FBUyxDQUFDO0lBRWpELEtBQUs7S0FDSixHQUFHLENBQUMsa0JBQWtCLEVBQUUsOEJBQWlCLENBQUMsV0FBVyxDQUFDO0tBQ3RELElBQUksQ0FBQyxrQkFBa0IsRUFBRSw4QkFBaUIsQ0FBQyxVQUFVLENBQUM7S0FDdEQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLDhCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRWxFLGtCQUFlLE1BQU0sQ0FBQyJ9