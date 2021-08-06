/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    let str = '0.'
    while (str.length < 32 && num !== 0) {
        num *= 2
        if (num >= 1) {
            str += 1
            num -= 1
        } else {
            str += 0
        }
    }
    if (num === 0) {
        return str
    }
    return 'ERROR'
};

var res = printBin(0.625)
console.log(res)