/**
 * @param {string} s
 * @return {boolean}
 */
// var canPermutePalindrome = function (s) {
//     let n = s.length
//     if (n == 0) return false
//     var map = {}
//     for (var i = 0; i < n; i++) {
//         if (map[s[i]] == undefined) {
//             map[s[i]] = 1
//         } else {
//             map[s[i]]++
//         }
//     }
//     //判断下是否都能被2整除，除了一个中间元素
//     var count = 0
//     for (var key in map) {
//         if (map[key] % 2 != 0) {
//             count++
//         }
//     }
//     return count <= 1
// }

function canPermutePalindrome(s) {
    var result = 0
    for (let c of s) {
        result ^= 1 << c.charCodeAt()
    }
    return (result & (result - 1)) == 0
}

var src = "tactcoa"

var res = canPermutePalindrome(src)

console.log(res)