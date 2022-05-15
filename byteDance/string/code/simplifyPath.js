/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const dir = path.split('/'), stack = []
    for (const i of dir) {
        if (i === '.' || i === '') continue
        if (i === '..') {
            stack.length > 0 ? stack.pop() : null
            continue
        }
        stack.push(i)
    }
    return '/' + stack.join('/')
};

var src = "/home//foo/"

var res = simplifyPath(src)

console.log(res)