var splitEqual = function (nums) {
    nums.sort()
    console.log("排序后的数组", nums)
}

var src = [1, 2, 3, 4, 3, 4, 2, 3, 4, 6, 7, 8]

var res = splitEqual(src)

console.log(res)