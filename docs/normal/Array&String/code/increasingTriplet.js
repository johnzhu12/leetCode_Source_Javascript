/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    var len = nums.length;
    if (len < 3) return false;
    var small = Infinity, mid = Infinity;



    for (var num of nums) {
        if (num <= small) {
            small = num;
        } else if (num <= mid) {
            mid = num;
        }
        else if (num > mid) {
            return true;
        }
    }

    return false;

};

var src = [1, 0, 0, 10, 0, 0, 0, 100]

var res = increasingTriplet(src)

console.log(res)