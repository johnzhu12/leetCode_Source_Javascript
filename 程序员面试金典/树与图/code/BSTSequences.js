var BSTSequences = function (root) {
    let res = []
    if (root == null) return [[]]
    let quenue = []

    let dfs = (root, res, quenue, temp) => {
        if (root == null) return
        if (root.left) quenue.push(root.left)
        if (root.right) quenue.push(root.right)
        if (quenue.length == 0) {
            res.push([...temp])
            return
        }
        let { length } = quenue
        while (length--) {
            let cur = quenue.shift()
            dfs(cur, res, quenue.slice(), [...temp, cur.val])
            quenue.push(cur)
        }
    }

    dfs(root, res, quenue, [root.val])
    return res
}

var tree = {
    val: 2,
    left: {
        val: 1,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

var res = BSTSequences(tree)
console.log('结果：', res)