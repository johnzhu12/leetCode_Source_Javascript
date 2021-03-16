/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion2 = function (s1, s2) {
    if (s1 == '' || s2 == '') return false
    let len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false
    for (let i = 0; i <= len2 - len1; i++) {
        let subStr2 = s2.substr(i, len1)
        if (checkStr(s1, subStr2)) {
            return true;
        }
    }
    return false
};
function checkStr(s1, s2) {
    let tems1 = s1.split('').sort().join("")
    let tems2 = s2.split('').sort().join("")
    if (tems1 == tems2) {
        return true;
    }
    return false
}
var checkInclusion = function (s1, s2) {
    const n = s1.length,
        m = s2.length
    if (n > m) {
        return false
    }
    const cnt1 = new Array(26).fill(0)
    const cnt2 = new Array(26).fill(0)
    for (let i = 0; i < n; ++i) {
        ++cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]
        ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]
    }
    if (cnt1.toString() === cnt2.toString()) {
        return true
    }
    for (let i = n; i < m; ++i) {
        ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]
        --cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]
        if (cnt1.toString() === cnt2.toString()) {
            return true
        }
    }
    return false
}
let s1 = "ab", s2 = "eidbaooo"

let res = checkInclusion(s1, s2)

console.log('res:', res)