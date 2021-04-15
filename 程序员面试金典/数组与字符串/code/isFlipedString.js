/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    var m = s1.length
    var n = s2.length
    if (s1 == s2) return true //包括了两个空字符串情况
    if (m != n) return false //包括了其中一个为空字符串情况
    //只有长度相等时，才能继续
    var index = 0
    while (index < m) {
        if (s2 == s1.slice(index, m) + s1.slice(0, index)) {
            return true
        } else {
            index++
        }

    }

    return false
};

var s1 = "ab"
var s2 = "ba"

var res = isFlipedString(s1, s2)

console.log('res', res)