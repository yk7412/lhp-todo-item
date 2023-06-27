import { getUuid } from "../../utils/getUUID";
import http from "../../utils/http";
import { sha256 } from "../../utils/sha256";
import { translate } from "./url";

/** 有道翻译 */
export const youDaoTranslate = (text) => {
    const UUID = getUuid()
    const time = new Date().getTime()
    // const input = ''
    const formData = new FormData()
    const params = {
        q: text,
        from: 'zh-CHS',
        to: 'en',
        appKey: '7976e41eec3441df',
        salt: UUID,
        sign: sha256('7976e41eec3441df' + text + time + UUID + '50km5IEnTlmjMzGuD0QJdxNT6epUTxLU'),
        signType: 'v3',
        curtime: time
    }
    // Object.keys(params).forEach(key => {
    //     formData.append(key, params[key])
    // })
    return http.post(translate.youDao, params, {
        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
    })
}