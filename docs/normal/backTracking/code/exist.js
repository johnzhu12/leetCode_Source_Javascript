/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];
    let m = board.length, n = board[0].length;
    let charArr = word.split("")

    function dfs(x, y, index, board, charArr) {
        if (index == charArr.length) {
            return true;
        }
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i], ny = y + dy[i]; //四个方向，左，右，上，下
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] == charArr[index]) {  //条件都满足时
                board[nx][ny] = '/';
                if (dfs(nx, ny, index + 1, board, charArr)) {
                    return true;
                }
                board[nx][ny] = charArr[index];
            }
        }
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == charArr[0]) //第一个字符匹配，开始
            {
                board[i][j] = "/" //访问过了
                if (dfs(i, j, 1, board, charArr)) {  //第三个参数index是当前匹配word已经匹配的个数
                    return true;
                }
                board[i][j] = charArr[0]; //还原，回溯算法
            }
        }
    }
    return false;
};

var board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"

var res = exist(board, word)

console.log(res)