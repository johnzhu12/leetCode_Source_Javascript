var zigzagLevelOrder = function (root) {
    let res = [];
    helper(root, res, 0);
    return res;
};

var helper = function (root, res, level) {
    if (!root) return;
    if (!res[level]) res[level] = [];
    level % 2 ? res[level].unshift(root.val) : res[level].push(root.val);
    helper(root.left, res, level + 1);
    helper(root.right, res, level + 1);
}