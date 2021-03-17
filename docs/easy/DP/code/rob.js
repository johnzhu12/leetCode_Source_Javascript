/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     var len = nums.length;
//     var sumSig = 0, sumDup = 0;
//     for (var i = 0; i < len; i++) {
//         if (i % 2 == 0) { //单数,从0开始
//             sumSig += nums[i]
//         } else {
//             sumDup += nums[i]
//         }
//     }
//     return Math.max(sumSig, sumDup)
// };

var rob = function (nums) {
    var len = nums.length;
    if (len == 0) return 0
    var sum = [] //记录
    for (var i = 0; i < len; i++) {
        if (i < 2) {
            sum[i] = nums[i]
        } else {
            sum[i] = Math.max(...sum.slice(0, i - 1)) + nums[i]
        }
    }
    return Math.max(...sum)
};

var src = []
var res = rob(src)

console.log(res)