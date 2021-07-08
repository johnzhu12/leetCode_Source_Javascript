var { tree } = require('./mockdata/tree.js')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let map = new Map()
    let ans = 0
    dfs(root, 0)
    return ans
    /**
     * 
     * @param {*} root 
     * @param {*} presum 前缀和
     * @returns 
     */
    function dfs(root, presum) {
        if (!root) {
            return 0
        }
        map.set(presum, (map.get(presum) || 0) + 1)
        let target = presum + root.val

        ans += (map.get(target - targetSum) || 0)

        // 继续找
        dfs(root.left, target)
        dfs(root.right, target)
        // 回溯 撤销
        map.set(presum, map.get(presum) - 1)
    }
};



var res = pathSum(tree, 6)

console.log('结果', res)