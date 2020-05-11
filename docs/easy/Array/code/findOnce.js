var singleNumber = function (nums) {
    if (nums.length == 0) return false;

    var str = nums.join(",");
    for (var i = 0; i < nums.length; i++) {
        var strReg = `${nums[i]}`;
        var reg = new RegExp(strReg, 'gim')
        var len = str.match(reg) ? str.match(reg).length : 0;
        if (len == 1) {
            return nums[i];
        }

    }
    return null;
};

var res = singleNumber([2, 2, 3, 4, 3, 4, 1]);
console.log(res)