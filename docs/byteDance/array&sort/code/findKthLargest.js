/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums = nums.sort((a, b) => b - a)
    console.log(nums)
    return nums[k - 1]
};

// var src = [3, 2, 3, 1, 2, 4, 5, 5, 6],k = 4
var src = [3, 2, 1, 5, 6, 4], k = 2
var res = findKthLargest(src, k)
console.log(res)