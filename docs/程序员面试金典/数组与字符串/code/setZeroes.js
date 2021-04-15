/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var m = matrix.length;
    var n = matrix[0].length
    var map = {
        row: {},
        col: {}
    }
    for (var i = 0; i < m; i++) {  //行
        for (var j = 0; j < n; j++) {  //列
            if (matrix[i][j] == 0) {
                map.col[j] = true
                map.row[i] = true
            }
        }
    }
    //行清零
    for (let row in map.row) {
        row = Number(row)
        for (var j = 0; j < n; j++) {  //列
            matrix[row][j] = 0
        }
    }
    //列清零
    for (let col in map.col) {
        col = Number(col)
        for (var i = 0; i < m; i++) {  //行
            matrix[i][col] = 0
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
console.log('res', res)