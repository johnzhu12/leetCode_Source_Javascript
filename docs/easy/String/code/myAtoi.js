/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim(); //去掉空格
    if (str.length = 0) {
        return ""
    }
    var reg = reg = /^[\+|\-]?[0-9]+/
    var numStr = str.match(reg);
    if (!numStr) return 0;
    var num = parseInt(numStr[0])
    if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }
    if (num < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    }
    return num;
};

var src = "words and 987"

var res = myAtoi(src)
console.log(res)