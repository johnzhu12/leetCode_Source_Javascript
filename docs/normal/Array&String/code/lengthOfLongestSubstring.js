/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var len = s.length;
    var max = 0;
    for (var start = 0; start < len; start++) {
        for (var stop = start + 1; stop <= len; stop++) {
            var subStr = s.substring(start, stop)
            if (!hasRepeat(subStr)) {  //不包含重复的
                max = Math.max(subStr.length, max)
            } else {
                continue
            }
        }
    }
    return max;
};
var hasRepeat = function (s) {
    var arr = s.split("")
    if (new Set(arr).size !== arr.length) {
        return true
    }
    return false;
}
var src = " ";

var res = lengthOfLongestSubstring(src)

console.log(res)