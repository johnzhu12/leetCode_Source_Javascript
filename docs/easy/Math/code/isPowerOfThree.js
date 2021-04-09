/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 3) return false;
    while (n >= 3) {
        if (n % 3 != 0) { //不是3的报数
            return false
        } else {
            n = n / 3
        }
    }
    return true;
};

var src = 9
var res = isPowerOfThree(src)
console.log(res)