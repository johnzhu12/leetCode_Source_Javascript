var insertBits = function (N, M, i, j) {
    var nStr = N.toString(2)
    var mStr = M.toString(2)
    var res = j - i + 1
    if (j > nStr.length) nStr = nStr.padStart(j, '0')
    if (res > mStr.length) mStr = mStr.padStart(res, '0')
    var len = nStr.length
    var len2 = mStr.length
    for (var a = len - 1 - i, b = len2 - 1; a >= len - 1 - j; a--, b--) {
        nStr = changeStr(nStr, a, mStr[b])
    }
    return parseInt(nStr, 2)

};
function changeStr(str, index, changeStr) {
    return str.substr(0, index) + changeStr + str.substr(index + changeStr.length);
}
// 输入：
// 126194517
// 2982082
// 9
// 30
//1024，1100

var res = insertBits(126194517, 2982082, 9, 30)

console.log(res)