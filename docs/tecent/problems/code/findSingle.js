
var findSignle = function (arr) {

    var len = arr.length, sum = 0;
    if (!arr || len == 0) return 0;
    var sum = 0
    var numMap = {}
    for (var i = 0; i < len; i++) {
        //有重复
        if (numMap[arr[i]] !== undefined) {
            numMap[arr[i]]++
        } else {  //没有重复
            numMap[arr[i]] = 1
        }

    }
    for (var key in numMap) {
        if (numMap[key] == 1) {
            arr[sum] = key
            sum++
        }
    }
    //把数组前N个改成不重复的数字
    console.log(arr)
    return sum

}

var src = [0, 0, 0, 1, 1, 1, 2, 5, 2, 3, 3, 4];

var res = findSignle(src)


console.log(res)

