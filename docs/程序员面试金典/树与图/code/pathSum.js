/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    let map = new Map()
    let ans = 0
    dfs(root, 0)
    return ans
    /**
     * 
     * @param {*} root 
     * @param {*} presum 前缀和
     * @returns 
     */
    function dfs(root, presum) {
        if (!root) {
            return 0
        }
        map.set(presum, (map.get(presum) || 0) + 1)
        let target = presum + root.val

        ans += (map.get(target - sum) || 0)

        // 继续找
        dfs(root.left, target)
        dfs(root.right, target)
        // 回溯 撤销
        map.set(presum, map.get(presum) - 1)
    }
};



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

var res = pathSum(tree, 10)
console.log('结果', res)