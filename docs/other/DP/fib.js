function fib(n) {
    var results = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            results[i] = i
        } else {
            results[i] = results[i - 1] + results[i - 2]
        }
    }
    return results
};

var res = fib(10);
console.log(res)