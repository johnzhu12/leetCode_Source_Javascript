function findMaxLen(str, target) {
    let len = str.length
    let index = 0
    let count = 0
    let res = 0
    let hintIndex = 0
    while (index < len) {
        if (str[index] != target) {  //不同了
            res = Math.max(res, count)
            if (res == count) { //当前的最大
                hintIndex = index - count;
            }
            count = 0
        } else { //命中target
            count++
        }
        index++
    }
    return hintIndex
}
//找出最长的长度
var src = "aaabbcccddccaaaaaaandw"
var target = "a"

var res = findMaxLen(src, target)

console.log(res)