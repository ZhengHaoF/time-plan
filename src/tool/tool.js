/**
 * 数字格式化
 * @param num {number} 数字
 * @param n 保留几位整数
 */
export const PrefixInteger = function (num, n) {
    return (Array(n).join(String(0)) + num).slice(-n);
}
