# 最长公共子序列

## 思路

因为我们需要在两个字符串中扫描，所以是一个二维的动态规划问题

1. 首先我们定义 dp[m][n] 表示：S1[0...m] 和 S2[0...n] 的最长公共子序列的长度
   当 m 和 n 的值不同时，dp[m][n] 所表示的两个字符串的长度不同，S1[0...m] 和 S2[0...n] 的最长公共子序列的长度的值也就不同，dp[m - 1][n - 1] 即为题目所求结果
2. 当我们对比 text1[m] 和 text2[n] 的时候，存在两种情况：
3. 当 text1[m] === text2[n]时，说明 text1[m] 或者 text2[n] 对应的字符是最长公共子序列的一部分，所以有 dp[m][n] = 1 + dp[m-1][n-1]
   当 text1[m] !== text2[n]时，此时我们要看两个字符串分别单独往回撤一个字符串的对比情况，获取两者的最大值即可，所以有 dp[m][n] = Math.max(dp[m - 1][n], dp[m][n - 1], dp[m-1][n-1])
   上面两种情况即为状态转移方程
4. 初始值，即 base case 为：⾏索引为 0 或者列索引为 0 的时候，此时值为 0，即 dp[0][0...n] 和 dp[0...m][0] 的值都为 0

```java
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * dp(m,n)表示：S1[0...m] 和 S2[0...n] 的最长公共子序列的长度
 * S1[m] == S[n]：dp(m,n) = 1 + dp(m - 1,n - 1)
 * dp(m,n) = max(dp(m - 1,n), dp(m,n - 1))
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // 初始化二维 dp 数组
  const dp = new Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0)
  }

  // 从前往后遍历设置 dp[i][j]，根据 dp[0][0..n] 和 dp[0..m][0] 都为 0，推导出 dp[m-1][n-1]
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // 第一种情况，两者相等，则 dp(m,n) = 1 + dp(m - 1,n - 1)
          if (text1[i] === text2[j]) {
            if (i - 1 < 0 || j - 1 < 0) { // 越界处理
              dp[i][j] = 1 + 0
            } else {
              dp[i][j] = 1 + dp[i - 1][j - 1];
            }
          } else { // 第二种情况，两者不相等，则 dp(m,n) = max(dp(m - 1,n), dp(m,n - 1))
              if (i - 1 < 0 || j - 1 < 0) { // 越界处理
                if (i - 1 < 0 && j - 1 < 0) {
                  dp[i][j] = 0
                } else if (i - 1 < 0) {
                  dp[i][j] = dp[i][j - 1]
                } else if (j - 1 < 0) {
                  dp[i][j] = dp[i - 1][j]
                }
              } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
              }

          }
      }
  }

  // dp[m - 1][n - 1] 即为结果
  return dp[m - 1][n - 1];
};

```
