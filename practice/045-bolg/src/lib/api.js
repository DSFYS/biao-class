import axios from "axios";

let appKey = "67b627974c4843896c36ba17472fbbe94b4eee9b9a67b0391054c0cae70455c4";
export default function api(url, data) {
    let timestamp = Date.now();
   return axios.post(`http://mock.biaoyansu.com/api/1/${url}`, data, {
        headers: {
            "BIAO-MOCK-APP-KEY":appKey,
            "BIAO-MOCK-TIMESTAMP":timestamp,
            "BIAO-MOCK-SIGNATURE":sign(appKey,timestamp)
        }
    })
}
/**
 * 签名
 * @param appKey 应用的键，可在应用管理中拿到：http://mock.biaoyansu.com/app
 * @param timestamp 时间戳
 * @return {string}
 */
function sign (appKey, timestamp) {
    return btoa(appKey + timestamp);
}