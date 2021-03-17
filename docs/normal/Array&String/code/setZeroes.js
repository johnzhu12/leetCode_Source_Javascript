/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length;
    var iRecords = [];
    var jRecords = []
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var item = matrix[i][j]
            if (matrix[i][j] == 0) {  //当前元素是0
                if (!iRecords.includes(i)) {
                    iRecords.push(i)
                }
                if (!jRecords.includes(j)) {
                    jRecords.push(j)
                }
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (iRecords.includes(i) || jRecords.includes(j)) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};

var src = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]
var res = setZeroes(src)

console.log(res)