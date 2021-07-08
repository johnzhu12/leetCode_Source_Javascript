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
var sumOfLeftLeaves = function (root) {

    let sum = 0;
    const getSum = ((root, isLeft) => {
        if (root == null) return;
        //要找的叶子节点
        if (root.left == null && root.right == null && isLeft) {
            sum += root.val;
            return;
        }
        //左分支
        getSum(root.left, true);
        //右分支
        getSum(root.right, false);


    });
    //初始调用时，为false。因为一个根节点，不是左叶子节点
    getSum(root, false);
    return sum;

};



var tree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

var res = sumOfLeftLeaves(tree)

console.log('结果', res)