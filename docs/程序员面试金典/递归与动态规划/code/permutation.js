/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    const res = []
    backtrack('')

    return res

    function backtrack(str) {
        // 符合字符串长度则收集
        if (str.length === S.length) {
            res.push(str)
            return
        }

        for (let i = 0; i < S.length; i++) {
            // 去除重复字符，比如：字符串为'ab'， 去掉'aa'或'bb'这类情况
            if (str.indexOf(S[i]) !== -1) {
                continue
            }

            // 递归：回溯的通用公式
            backtrack(str + S[i])
        }
    }
};



var S = "qwe"

var res = permutation(S)
console.log(S)