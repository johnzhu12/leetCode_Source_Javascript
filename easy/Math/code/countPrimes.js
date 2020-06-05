/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var count = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
};
var isPrime = function (x) {

    for (var i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false
        }
    }

    return true;
}


var src = 10
// var bool = isPrime(13)
// console.log(bool)
var res = countPrimes(src)
console.log(res)