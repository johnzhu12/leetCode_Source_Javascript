var { tree } = require('./mockdata/tree.js')
var pathSum = function (root, targetSum) {
    var res = []

    function dfs(root, stack, sum) {
        if (root) {
            stack.push(root.val)
            sum += root.val
            if (root.left || root.right) {
                if (root.left) dfs(root.left, stack, sum)
                if (root.right) dfs(root.right, stack, sum)
            } else { //叶子节点
                if (sum == targetSum) {
                    res.push(stack.slice())
                }
            }
            stack.pop()
        }
    }
    dfs(root, [], 0)

    return res
}

var res = pathSum(tree, 18)

console.log('结果', res)