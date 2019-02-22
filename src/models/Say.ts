import { DB, Schema } from '../mongoDB';

const SaySchema = new Schema({
    // 发表时间
    create_at: { type: Date, default: Date.now()},

    // 说说
    say: String
});

const Say = DB.model('Say', SaySchema);

export default Say;