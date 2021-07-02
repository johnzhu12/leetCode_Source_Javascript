var Traversal = function (root, type) {
    var res = [];
    switch (type) {
        case 0:
            preorder(root, res);
            break;
        case 1:
            inorder(root, res);
            break;
        case 2:
            postorder(root, res);
            break;
    }
    return res;
};
function preorder(root, res) {
    if (!root) return;
    res.push(root.val);
    inorder(root.left, res);
    inorder(root.right, res);
}
function inorder(root, res) {
    if (!root) return;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
}
function postorder(root, res) {
    if (!root) return;
    inorder(root.left, res);
    inorder(root.right, res);
    res.push(root.val);
}
var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            },
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: null,
                right: null
            },
            right: {
                val: 11,
                left: null,
                right: null
            },
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12,
                left: null,
                right: null
            },
            right: {
                val: 13,
                left: null,
                right: null
            },
        },
        right: {
            val: 7,
            left: {
                val: 14,
                left: null,
                right: null
            },
            right: {
                val: 15,
                left: null,
                right: null
            },
        },
    }
}

var res0 = Traversal(tree, 0)
console.log('前序遍历结果', res0)
var res1 = Traversal(tree, 1)
console.log('中序遍历结果', res1)
var res2 = Traversal(tree, 2)
console.log('后续遍历结果', res2)