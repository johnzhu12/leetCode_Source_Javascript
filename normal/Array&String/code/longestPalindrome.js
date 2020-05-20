// ===================================
// //1. 暴力破解
// var longestPalindrome = function (s) {
//     var len = s.length;
//     if (len < 2) {
//         return s;
//     }
//     var maxLen = 1;
//     var begin = 0;
//     var charArray = s.split("");

//     // 枚举所有长度大于 1 的子串 charArray[i..j]
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = i + 1; j < len; j++) {
//             if (j - i + 1 > maxLen && validPalindromic(charArray, i, j)) {
//                 maxLen = j - i + 1;
//                 begin = i;
//             }
//         }
//     }
//     return s.substring(begin, begin + maxLen);
// }

// /**
//  * 验证子串 s[left..right] 是否为回文串
//  */
// var validPalindromic = function (charArray, left, right) {
//     while (left < right) {
//         if (charArray[left] != charArray[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

//=========================================
//2. 动态规划

var longestPalindrome = function (s) {
    // 特判
    var len = s.length;
    if (len < 2) {
        return s;
    }

    var maxLen = 1;
    var begin = 0;

    // dp[i][j] 表示 s[i, j] 是否是回文串
    // boolean[][] dp = new boolean[len][len];
    var dp = [];
    for (var i = 0; i < len; i++) {
        var arr = []
        for (var j = 0; j < len; j++) {
            arr.push("")
        }
        dp.push(arr)
    }
    var charArray = s.split("");

    for (var i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    for (var j = 1; j < len; j++) {
        for (var i = 0; i < j; i++) {
            if (charArray[i] != charArray[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}

var src = 'babad'
var res = longestPalindrome(src)
console.log(res)