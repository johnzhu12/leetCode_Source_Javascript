/**
 * @param {string} S
 * @return {string}
 */
// var compressString = function (S) {
//     var n = S.length;
//     if (n == 0) return ""
//     var index = 1;
//     var s2 = '', count = 1;
//     while (index < n) {
//         if (S[index] != S[index - 1]) { //出现不一样的了，前面的就要压缩一下
//             s2 += S[index - 1] + count;
//             count = 1
//         } else {   //一样的，统计个数
//             count++
//         }
//         index++
//     }
//     //最后还要加上
//     s2 += S[index - 1] + count;
//     console.log(s2)
//     return s2.length < n ? s2 : S
// }
var compressString = function (S) {
    let ans = ""
    let i = 0,
        j = 0 // 精妙...
    while (j < S.length - 1) {
        if (S[j] !== S[j + 1]) {
            ans += S[i] + (j - i + 1)
            i = j + 1
        }
        j++
    }

    ans += S[i] + (j - i + 1)
    return ans.length < S.length ? ans : S
}
var src = ""

var res = compressString(src)

console.log('res', res)