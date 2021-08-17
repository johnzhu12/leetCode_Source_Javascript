var generateParenthesis = function (n) {
    const res = [];

    const dfs = (lRemain, rRemain, str) => { // 左右括号所剩的数量，str是当前构建的字符串
        if (str.length == 2 * n) { // 字符串构建完成
            res.push(str);           // 加入解集
            return;                  // 结束当前递归分支
        }
        if (lRemain > 0) {         // 只要左括号有剩，就可以选它，然后继续做选择（递归）
            dfs(lRemain - 1, rRemain, str + "(");
        }
        if (lRemain < rRemain) {   // 右括号比左括号剩的多，才能选右括号
            dfs(lRemain, rRemain - 1, str + ")"); // 然后继续做选择（递归）
        }
    };

    dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
    return res;
};


var res = generateParenthesis(3)

console.log(res)