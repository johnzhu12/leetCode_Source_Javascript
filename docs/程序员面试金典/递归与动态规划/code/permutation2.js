/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    let res = new Set()
    backtrack('', S)
    res = Array.from(res)
    return res

    function backtrack(str, S) {
        // 符合字符串长度则收集
        if (str.length === S.length) {
            res.add(str)
            return
        }

        for (let i = 0; i < S.length; i++) {

            if (S[i] != '*') {
                let temp = S[i]
                let Str = str + temp
                S = setCharAt(S, i, "*")
                backtrack(Str, S)
                S = setCharAt(S, i, temp)
            }
        }
    }
};

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

var S = "qqe"

var res = permutation(S)
console.log(res)