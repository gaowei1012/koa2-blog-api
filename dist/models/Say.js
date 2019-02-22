"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoDB_1 = require("../mongoDB");
var SaySchema = new mongoDB_1.Schema({
    // 发表时间
    create_at: { type: Date, default: Date.now() },
    // 说说
    say: String
});
var Say = mongoDB_1.DB.model('Say', SaySchema);
exports.default = Say;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5LmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9TYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFFeEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxnQkFBTSxDQUFDO0lBQ3pCLE9BQU87SUFDUCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUM7SUFFN0MsS0FBSztJQUNMLEdBQUcsRUFBRSxNQUFNO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsSUFBTSxHQUFHLEdBQUcsWUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFdkMsa0JBQWUsR0FBRyxDQUFDIn0=