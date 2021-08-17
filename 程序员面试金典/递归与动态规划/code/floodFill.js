var floodFill = function (image, sr, sc, newColor) {
    function helper(image, i, j, oldColor, newColor) {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] != oldColor || image[i][j] == newColor) return;
        image[i][j] = newColor;
        helper(image, i + 1, j, oldColor, newColor);
        helper(image, i - 1, j, oldColor, newColor);
        helper(image, i, j + 1, oldColor, newColor);
        helper(image, i, j - 1, oldColor, newColor);
    }
    helper(image, sr, sc, image[sr][sc], newColor);
    return image;
};

var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
var sr = 1, sc = 1, newColor = 2
// 输出：[[2,2,2],[2,2,0],[2,0,1]]
var res = floodFill(image, sr, sc, newColor)
console.log(res)

