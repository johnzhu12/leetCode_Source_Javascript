var reverseBits = function (num) {
    var numStr
    if (num >= 0) {
        numStr = num.toString(2).padStart(32, '0')
    } else {
        num = num >>> 0                               // 负数位运算，转换成10进制整数
        numStr = num.toString(2).padStart(32, '0')
    }
    var len = numStr.length
    var max = 0
    for (var i = 0; i < len; i++) {
        if (numStr[i] == '1') continue;
        var newStr = numStr.substr(0, i) + '1' + numStr.substr(i + 1)
        var maxCount = maxLen(newStr)
        if (max < maxCount) {
            max = maxCount
        }
    }
    var maxCount = maxLen(numStr)
    if (max < maxCount) {
        max = maxCount
    }
    return max
}
//计算1的长度
function maxLen(resStr) {
    var count = 0
    var max = 0
    for (var i = 0; i < resStr.length; i++) {
        //断了
        if (resStr[i] != '1') {
            if (count > max) {
                max = count
            }
            count = 0
        } else {
            count++
        }
    }
    if (count > max) max = count
    return max

}

var res = reverseBits(-1)
console.log(res)