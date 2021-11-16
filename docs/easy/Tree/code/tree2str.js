var { tree } = require('./data.js')

var tree2str = function (root) {
    let dfs = (n) => {
        if (!n) return ''
        let res = ''
        if (!n.left && !n.right) {
            return res + `${n.val}`
        }
        res = `${n.val}`
        if (n.left) res += `(${dfs(n.left)})`
        if (!n.left && n.right) res += '()'
        if (n.right) res += `(${dfs(n.right)})`
        return res
    }
    return dfs(root)
};


var res = tree2str(tree)
console.log(res)