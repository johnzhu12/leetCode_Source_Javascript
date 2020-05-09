/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
    reverseTree(root);
}
function reverseTree(root) {
    //为空则结束
    if (root == null) {
        return;
    }
    //假设root两边的子树自己都已经翻转成功了，那么只需要再将左右子树互换一下就成功了
    //交换root的左右子树
    swap(root);

    //左右子树翻转自己去处理就行了，我们规定每个子树的root都跟最终的root处理方式一样即可
    reverseTree(root.left);
    reverseTree(root.right);
}

function swap(root) {
    var node = null;
    node = root.left;
    root.left = root.right;
    root.right = node;
}