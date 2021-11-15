var diameterOfBinaryTree = function (root) {
    var ans = 1
    function dfs(node) {
        if (node == null) {
            return 0
        }
        var L = dfs(node.left)
        var R = dfs(node.right)
        ans = Math.max(ans, L + R + 1)
        return Math.max(L, R) + 1
    }
    dfs(root)
    return ans - 1
};