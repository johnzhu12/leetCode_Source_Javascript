var reverse = function (x) {
    if (x == 0) return 0;
    x = (x).toString();
    if (x[0] == '-') {
        x = x.split("").reverse()
        x.unshift(x.pop())
        x = x.join("")
    } else {
        x = x.split("").reverse().join("")
    }
    var reg = /^0+/g
    x = parseInt(x.replace(reg, ""))
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) {
        return 0
    }
    return x;
};

var res = reverse(0)
console.log(res)