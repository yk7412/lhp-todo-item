import { message } from "antd"
import http from "../../utils/http"
import Cookies from 'js-cookie'
import { ERROR, SUCCESS } from "../name"
import { AxiosResponse } from 'axios'
import { base } from "./url"

export interface responseType extends AxiosResponse {
    code: number
    msg: string
}

export const responseCallback: (res: any, msgFlag?: boolean) => responseType = (res, msgFlag = true) => {
    if(msgFlag) {
        if(res.code === 200) {
            message.success(res.msg || SUCCESS)
        }else {
            message.error(res.msg || ERROR)
        }
    }
    return res
}

/** 用户登录 */
export const userLogin = async (params: {userName: string, password: string}) => {
    const res = await http.post(base.login, {userName: params.userName, password: params.password})
    return responseCallback(res)
}

/** 用户注册 */
export const userRegister = async (params: {userName: string, password: string}) => {
    const res = await http.post(base.register, {userName: params.userName, password: params.password})
    return responseCallback(res)
}