function infixToSuffix(infix) {
    let symbol = [],
        value = [],
        res = ''
    infix.split('').forEach((item) => {
        switch (true) {
            case /\d/.test(item):
                value.push(item)
                break
            case /[+\-*/]/.test(item):
                while (symbol.length + 1) {
                    if (!symbol.length || !/[+\-*/]/.test(symbol[symbol.length - 1])) {
                        // 栈顶为空或非运算符
                        symbol.push(item) // 弹入栈1
                        break
                    }
                    if (/[*/]/.test(item) && /[+\-]/.test(symbol[symbol.length - 1])) {
                        // 比栈顶低
                        symbol.push(item) // 弹入栈1
                        break
                    }
                    if (/[+\-]/.test(item) && /[*/]/.test(symbol[symbol.length - 1])) {
                        // 比栈顶高
                        value.push(symbol.pop()) // 弹出栈顶，栈顶弹入栈2
                        continue
                    }
                    // 等于栈顶
                    value.push(item) // 弹入栈2
                    break
                }
                break
            case /\(/.test(item):
                symbol.push(item)
                break
            case /\)/.test(item):
                while (symbol.length) {
                    let mid = symbol.pop()
                    if (mid !== '(') {
                        value.push(mid)
                    } else break
                }
                break
            default:
        }
    })
    while (value.length) {
        symbol.push(value.pop())
    }
    while (symbol.length) {
        res += symbol.pop()
    }
    return res
}
console.log(infixToSuffix('(3+4)*5-6')) // 34+5*6-
// console.log(infixToSuffix('1+2*3+(4*5+6)*7')) // 123*+45*6+7*+