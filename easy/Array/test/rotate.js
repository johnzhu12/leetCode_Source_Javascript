// xy --> y(n-y)
//用别的数组实现
var rotate = function (matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i + 1; j < matrix.length; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (var i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }
};

var srcMatrix =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

rotate(srcMatrix)
console.log(JSON.stringify(srcMatrix))