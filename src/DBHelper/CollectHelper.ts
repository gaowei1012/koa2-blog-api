import { Collect, Info } from '../models';


//定义接口
interface IPayload {
    pageSize: string,
    pageIndex: string
};

export default class CollectHelper {
    // 查询收藏
    public static findCollect = async (payload: IPayload) => {
        const { pageIndex, pageSize } = payload;
        const Skip = Number.parseInt(pageIndex) * Number.parseInt(pageSize) - Number.parseInt(pageSize);
        const collect = await Collect.find({})
                            .sort({create_at: -1})
                            .limit(Number.parseInt(pageSize))
                            .skip(Skip);
        const total = await Collect.count({});
        return { collect, total };
    };

    // 删除收藏
    public static deleteCollect = async (payload: IPayload) => {
        const response = await Collect.remove(payload);
        if (response === 1) {
            return { message: '删除成功' };
        } else {
            return { message: '删除失败', type: 'error' };
        };
    };

    // 添加收藏
    public static addCollect = async (say: object) => {
        const response = await Collect.create({...say, create_at: Date.now()});
        const info: any = await Info.find({});

        if (Array.isArray(info[0].data)) {
            info[0].data.forEach((item: any) => {
                if (Number.parseInt(item.month) === new Date().getMonth() + 1) {
                    item.collect += 1;
                };
            });
            await info.update({ _id: info[0]._id }, { data: info[0].data });
        }
        if (response) {
            return { message: '添加收藏成功' };
        }
    };
}