import http from "../../utils/http";
import { base } from "./url";
import { responseCallback } from "./user";

/** 获取待办列表 */
export const getTodoList = async () => {
    const res = await http.get(base.getTodoList)
    return responseCallback(res)
}