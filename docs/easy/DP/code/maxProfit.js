/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var len = prices.length;
    if (len < 2) {
        return 0;
    }

    // 0：用户手上不持股所能获得的最大利润，特指卖出股票以后的不持股，非指没有进行过任何交易的不持股
    // 1：用户手上持股所能获得的最大利润

    // 注意：因为题目限制只能交易一次，因此状态只可能从 1 到 0，不可能从 0 到 1
    // int[][] dp = new int[len][2];
    var dp = [];
    for (var i = 0; i < len; i++) {
        var arr = []
        for (var j = 0; j < 2; j++) {
            arr.push("")
        }
        dp.push(arr)
    }
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (var i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[len - 1][0];
}

var src = [7, 1, 5, 3, 6, 4];
var res = maxProfit(src)
console.log(res)