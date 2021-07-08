var { tree } = require('./mockdata/tree.js')
var hasPathSum = function (root, targetSum) {
    var res = []
    function dfs(root, pathSum) {
        if (root) {
            pathSum += Number(root.val);
            if (root.left || root.right) {
                if (root.left) dfs(root.left, pathSum)
                if (root.right) dfs(root.right, pathSum)
            } else { //叶子节点
                res.push(pathSum)
            }
        }
    }
    dfs(root, 0)

    return res.indexOf(targetSum) >= 0;
}

var res = hasPathSum(tree, 18)

console.log('结果', res)