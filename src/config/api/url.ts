
/** 项目接口 */
const baseUrl = {
    /** 获取笔记列表 */
    getNoteList: '/noteList/list',
    /** 新建笔记 */
    noteListCreate: '/noteList/create',
    /** 获取待办列表 */
    getTodoList: '/list',
    /** 用户登录 */
    login: '/users/login',
    /** 用户注册 */
    register: '/users/create',
}

/** 翻译接口 */
const translateUrl = {
    youDao: 'https://openapi.youdao.com/api'
}

const urlFormat = (baseUrl, obj) => {
    const result:any = {}
    Object.keys(obj).forEach(key => {
        result[key] = baseUrl + obj[key]
    })
    return result
}

// export default {
export const base = urlFormat('http://localhost:9000', baseUrl)
export const translate = urlFormat('', translateUrl)
// }
