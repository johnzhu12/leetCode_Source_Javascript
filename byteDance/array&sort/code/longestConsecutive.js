/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0
    nums = nums.sort((a, b) => a - b)
    var dp = [], ans = 1;
    dp[0] = 1
    for (var i = 0; i < nums.length; i++) {
        if (nums[i + 1] == nums[i]) { //相同的数字
            dp[i + 1] = dp[i]
            continue
        }
        if (nums[i + 1] == nums[i] + 1) {  //递增1
            dp[i + 1] = dp[i] + 1
            ans = Math.max(ans, dp[i + 1])
        } else { //断了,重新置为1
            dp[i + 1] = 1
        }
    }
    // ans = Math.max(...dp)
    return ans
};

var src = [1, 2, 0, 1]
var res = longestConsecutive(src)

console.log(res)