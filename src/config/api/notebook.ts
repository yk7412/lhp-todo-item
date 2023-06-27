import http from "../../utils/http";
import { responseCallback } from "./user";
import {base} from './url'

/** 获取笔记列表 */
export const getNoteList = async (params) => {
    const res = await http.get(base.getNoteList, {params})
    return responseCallback(res)
}

/** 新建笔记 */
export const noteItemAdd = async (value) => {
    const res = await http.post(base.noteListCreate, value)
    return responseCallback(res)
}