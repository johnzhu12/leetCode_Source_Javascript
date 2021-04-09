/**
 * @param {number[]} nums
 * @return {number}
 */
//暴力枚举
// var maxSubArray = function (nums) {
//     var sum = -Infinity;
//     var len = nums.length;
//     for (var start = 0; start < len; start++) {
//         for (var end = start; end < len; end++) {
//             var ans = 0
//             for (var k = start; k <= end; k++) ans = ans + nums[k];
//             if (sum < ans) {
//                 sum = ans;
//             }
//         }
//     }
//     return sum
// };
// 暴力优化
// var maxSubArray = function (nums) {
//     var sum = -Infinity;
//     var len = nums.length;
//     for (var start = 0; start < len; start++) {
//         var ans = 0
//         for (var end = start; end < len; end++) {

//             ans = ans + nums[end];
//             if (sum < ans) {
//                 sum = ans;
//             }
//         }
//     }
//     return sum
// };

//贪心算法

// var maxSubArray = function (nums) {
//     var len = nums.length;
//     var cur_sum = nums[0], max_sum = nums[0];
//     for (var i = 0; i < len; i++) {
//         cur_sum = Math.max(nums[i], cur_sum + nums[i]);
//         max_sum = Math.max(cur_sum, max_sum)
//     }
//     return max_sum;
// }
//动态规划
// var maxSubArray = function (nums) {
//     let pre = 0, maxAns = nums[0];
//     nums.forEach((x) => {
//         pre = Math.max(pre + x, x);
//         maxAns = Math.max(maxAns, pre);
//     });
//     return maxAns;
// };

var maxSubArray = function (nums) {
    let len = nums.length
    for (var i = 1; i < len; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
    }
    return Math.max(...nums)
};

var src = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var res = maxSubArray(src);

console.log(res)