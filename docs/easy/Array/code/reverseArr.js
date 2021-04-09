// var rotate = function (nums, k) {
//     var n = nums.length
//     if (n == 0) return [];
//     k %= n;
//     nums = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
//     return nums;
// };

// var re = rotate([-1, 2], 4)
// console.log(re)

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var rotate = function (nums, k) {
    if (nums.length == 0) return [];
    for (var i = 0; i < k; i++) {
        var last = nums.pop();
        nums.unshift(last)
    }
};