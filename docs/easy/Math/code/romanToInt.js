/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var code = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000, "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900 }
    var sum = 0;
    var len = s.length
    for (var i = 0; i < len; i++) {
        var item = s[i]
        if (i + 1 < len && peekSpecial(s.substr(i, 2))) { //是特殊的
            sum += code[s.substr(i, 2)]  //加上去
            i++  //跳过一个
        } else {
            sum += code[item]  //加上去
        }

    }

    return sum;
};

var peekSpecial = function (peekchar) {
    var spec = ["IV", "IX", "XL", "XC", "CD", "CM"]
    if (spec.includes(peekchar)) {
        return true;
    }
    return false;
}


var src = 'IM'

var res = romanToInt(src)

console.log(res)