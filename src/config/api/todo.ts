import http from "../../utils/http";
import { responseCallback } from "./user";

/** 获取待办列表 */
export const getTodoList = async () => {
    const res = await http.get('/list')
    return responseCallback(res)
}