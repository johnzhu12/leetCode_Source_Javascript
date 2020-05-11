var moveZeroes = function (nums) {
    var count = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            i--
            count++
        }
    }
    for (var j = 0; j < count; j++) {
        nums.push(0)
    }
    return nums
};

var nums = [0, 0, 1]
var res = moveZeroes(nums)
console.log(res)