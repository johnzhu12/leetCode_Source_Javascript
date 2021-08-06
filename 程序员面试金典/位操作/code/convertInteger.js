/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
    // 异或，然后计算1的个数
    var res = A ^ B
    if (res < 0) res = res >>> 0
    var resStr = res.toString(2)
    var ans = 0
    for (var i = 0; i < resStr.length; i++) {
        if (resStr[i] == '1') {
            ans++
        }
    }
    return ans
};
// 826966453
// -729934991
var res = convertInteger(826966453, -729934991)

console.log(res)