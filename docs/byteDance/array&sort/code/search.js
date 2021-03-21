function search(nums, target) {
    var n = nums.length;
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return nums[0] == target ? 0 : -1;
    }
    var l = 0, r = n - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[0] <= nums[mid]) {  //mid在左边有序部分
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {     //mid在右边有序部分
            if (nums[mid] < target && target <= nums[n - 1]) {   //target在右半边，并且target小于最右边的元素
                l = mid + 1;
            } else {  //target在左半边
                r = mid - 1;
            }
        }
    }
    return -1;
}

// var src = [6, 7, 0, 1, 2, 4, 5]
// var target = 6;
var src = [6, 7, 8, 1, 2, 3, 4, 5]
var target = 4;
var res = search(src, target)
console.log(res)
