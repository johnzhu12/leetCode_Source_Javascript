var binaryTreePaths = function (root) {
    var res = []
    function dfs(root, path) {

        path += root.val.toString();
        if (root.left || root.right) {
            path += "->";
            if (root.left) dfs(root.left, path)
            if (root.right) dfs(root.right, path)
        } else { //叶子节点
            res.push(path)
        }

    }
    dfs(root, '')
    return res;
};

var tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

var res = binaryTreePaths(tree)

console.log(res)