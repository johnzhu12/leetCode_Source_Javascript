var hasPathSum = function (root, targetSum) {
    // 深度优先遍历
    if (root === null) {
        //1.刚开始遍历时 
        //2.递归中间 说明该节点不是叶子节点 
        return false;
    }
    if (root.left === null && root.right === null) {
        return root.val - targetSum === 0
    }
    // 拆分成两个子树
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};
