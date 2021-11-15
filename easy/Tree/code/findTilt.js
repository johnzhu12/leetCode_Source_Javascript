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
 * @return {number}
 */
var findTilt = function (root) {
    var total = 0;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);
        total += Math.abs(left - right);
        return left + right + node.val;
    }

    dfs(root);
    return total;
};


