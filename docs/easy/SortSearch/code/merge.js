// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/52/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (n > 0) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[n + m - 1] = nums1[--m]
        } else {
            nums1[n + m - 1] = nums2[--n]
        }
    }
};