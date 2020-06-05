/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var ans = []
    for (var i = 1; i <= n; i++) {
        if (i % 3 != 0 && i % 5 != 0) { //不是3或者5的倍数
            ans.push(`${i}`)
        } else if (i % 3 == 0 && i % 5 == 0) {//同时是3或者5的倍数
            ans.push('FizzBuzz')
        } else if (i % 3 == 0 && i % 5 != 0) {//只是3的倍数
            ans.push('Fizz')
        } else {
            ans.push('Buzz')
        }
    }
    return ans;
};

var src = 15

var res = fizzBuzz(src)

console.log(res)