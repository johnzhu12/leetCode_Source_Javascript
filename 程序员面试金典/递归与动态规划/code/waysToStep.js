// var waysToStep = function (n) {
//     if (n == 1) return 1
//     if (n == 2) return 2
//     if (n == 3) return 4
//     return waysToStep(n - 1) + waysToStep(n - 2) + waysToStep(n - 3)
// };
var waysToStep = function (n) {
    var results = [1, 2, 4];

    for (var i = 3; i < n; i++) {

        let res = results[i - 1] + results[i - 2] + results[i - 3]
        results[i] = res % 1000000007;  //这一步关键


    }
    return results[n - 1]
};
var src = 35
var res = waysToStep(src)

console.log(res)