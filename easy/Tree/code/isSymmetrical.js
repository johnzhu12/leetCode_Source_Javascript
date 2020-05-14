
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // write code here
    //空树 认为是对称的
    if (root === null) return true;
    //不是空树，则判断左右子树
    return help(root.left, root.right);
};
function help(left, right) {
    //左子树为空，当右子树为空时对称
    if (left === null) {
        return right === null;
    }
    //经过上一行判断出左子树不为空了，右子树为空的话不对称
    if (right === null) {
        return false;
    }
    //两个节点元素值不一样也不对称
    if (left.val !== right.val) {
        return false;
    }
    //判断子树1的右子树和子树2的左子树是否相同，子树1的左子树和子树2的右子树是否相同

    return help(left.left, right.right) && help(left.right, right.left);
}