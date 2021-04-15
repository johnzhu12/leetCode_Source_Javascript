/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    for (var i = 0; i < m; i++) {
        for (var j = i + 1; j < n; j++) {
            var temp;
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp

        }
    }


    matrix = matrix.map(arr => arr.reverse())
    return matrix
};


var matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
var res = rotate(matrix)

console.log('res', res)