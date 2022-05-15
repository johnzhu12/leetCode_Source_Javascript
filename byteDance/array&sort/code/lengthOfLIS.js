function lengthOfLIS(nums) {
  var n = nums.length
  if (n == 0) {
    return 0
  }
  var dp = []
  var max = 1
  for (var i = 0; i < n; i++) {
    dp[i] = 1
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }
  return max
}

var src = [1, 3, 5, 4, 7]

var res = lengthOfLIS(src)

console.log(res)