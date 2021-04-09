function removeDuplicates(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) nums[++i] = nums[j];
    }
    return ++i;
}

var src = [1, 1, 2, 3, 4, 5, 6, 7,]