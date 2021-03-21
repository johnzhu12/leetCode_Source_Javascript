function findLengthOfLCIS(nums) {
    var n = nums.length;
    if (n == 0) {
        return 0;
    }
    var dp = [];
    var max = 1;
    for (var i = 0; i < n; i++) {
        dp[i] = 1;
        if (nums[i - 1] < nums[i]) {
            dp[i] = Math.max(dp[i], dp[i - 1] + 1);
        }
        max = Math.max(max, dp[i]);
    }
    return max;

}

// var src = [1, 3, 5, 4, 7]
var src = [2, 2, 2, 2, 2, 2]
var res = findLengthOfLCIS(src);
console.log('res', res)