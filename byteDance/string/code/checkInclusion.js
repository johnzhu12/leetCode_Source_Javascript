/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1 == '' || s2 == '') return false
    if (s1.length < s2.length) return false
    // if () {
    //     return true
    // }
    return false
};
function checkStr(s1, s2) {
    s1.split('').sort().join("")
    s2.split('').sort().join("")
    if (s1 == s2) {
        return true;
    }
    return false
}