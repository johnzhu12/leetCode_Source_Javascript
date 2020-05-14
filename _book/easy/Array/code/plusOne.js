var plusOne = function (digits) {
    var rev = digits.reverse();
    // console.log(rev)
    var i = 0, len = digits.length;
    while (++rev[i] == 10) {
        rev[i] = 0
        i++;
        if (i == len) {
            rev.push(1);
            break;
        }
    }
    var res = rev.reverse()
    return res;
};

var digits = [9, 9]

var a = plusOne(digits)
console.log(a)