/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var res = [];
    inorder(root, res);
    return res;
};
//按照左 根 右顺序遍历
function inorder(root, res) {
    if (!root) return;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}
