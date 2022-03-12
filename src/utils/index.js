/*
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-03-12 10:02:57
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 10:33:13
 */
/**
* @方法名称:
* @功能描述:防抖
* @参数:fun 函数 wat时间 imd 0立即执行 1不是立即执行
* @作者: Devilyuan
* @备注说明:
*/
export function debounce(fun, wat = 300, imd = 0) {
    let timeout;
    return function () {
        let con = this;
        let arg = arguments;
        if (timeout) clearTimeout(timeout);
        if (imd === 0) {
            timeout = setTimeout(() => {
                fun.apply(con, arg);
            }, wat)
        } else {
            let fpg = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wat)
            if (fpg) {
                fun.apply(con, arg)
            }
        }
    }
}
/**
* @方法名称:
* @功能描述:节流
* @参数:fun 函数 wat时间 fg 0时间戳 1计时器
* @作者: Devilyuan
* @备注说明:
*/
export function throttle(fun, wat = 300, fg = 0) {
    if (fg === 0) {
        var previous = 0;
    } else {
        var timeout1;
    }
    return function () {
        let con = this;
        let arg = arguments;
        if (fg === 0) {
            let dn = Date.now();
            if (dn - previous > wat) {
                fun.apply(con, arg);
                previous = dn
            }
        } else {
            if (!timeout1) {
                timeout1 = setTimeout(() => {
                    timeout1 = null;
                    fun.apply(con, arg);
                }, wat)

            }

        }
    }
}