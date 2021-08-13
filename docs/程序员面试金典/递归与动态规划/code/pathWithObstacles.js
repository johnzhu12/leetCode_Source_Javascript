/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
    var res = []
    dfs(obstacleGrid, 0, 0, [])
    return res.length ? res[0] : []
    function dfs(obstacleGrid, i, j, track) {
        // base case
        if (i == obstacleGrid.length || j == obstacleGrid[0].length) {
            return
        }
        if (obstacleGrid[i][j] == 0) {
            track.push([i, j])
            obstacleGrid[i][j] = 2

            if (i === obstacleGrid.length - 1 && j === obstacleGrid[0].length - 1) {
                res.push([...track])
                // 撤销
                track.pop()
                return
            }
            // 向右
            dfs(obstacleGrid, i, j + 1, track)
            // 向下
            dfs(obstacleGrid, i + 1, j, track)
            // 撤销
            track.pop()


        }

    }
};

var src = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]
var res = pathWithObstacles(src)

console.log(res)