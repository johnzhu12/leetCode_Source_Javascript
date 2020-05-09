//m行，n列，每次只能往右或往下移动一格，从左上角到右下角的路径数
function count_paths(m, n) {
    var results = [];
    for (var i = 0; i < m; i++) {
        var arr = []
        for (var j = 0; j < n; j++) {
            arr.push(1)
        }
        results.push(arr)
    }
    for (var i = 1; i < m; i++) {

        for (var j = 1; j < n; j++) {
            results[i][j] = results[i - 1][j] + results[i][j - 1]
        }
    }
    return results
}

var res = count_paths(7, 3)
console.log(res)