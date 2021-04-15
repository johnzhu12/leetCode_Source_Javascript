/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    let n1 = first.length;
    let n2 = second.length;
    if (Math.abs(n1 - n2) > 1) return false;
    if (first == second) return true
    if (n1 == n2) { //这种情况只能有一个字符不一样，并且注意要顺序一致
        let count = 0
        for (let i = 0; i < n1; i++) {
            if (first[i] != second[i]) count++
        }
        return count == 1
    }
    if ((n1 == 0 && n2 == 1) || (n1 == 1 && n2 == 0)) return true
    if (n1 < n2) {
        for (let i = 0; i < n1; i++) {
            if (first[i] != second[i]) { //发现了不一样的地方
                second = second.replace(second[i], "")
                return first == second
            }
        }
        return true;
    }
    if (n2 < n1) {
        for (let i = 0; i < n2; i++) {
            if (first[i] != second[i]) { //发现了不一样的地方
                first = first.replace(first[i], "")
                return first == second
            }
        }
        return true;
    }
    // return false
}

var first = 'mart'
var second = 'karma'

var res = oneEditAway(first, second)
console.log(res)