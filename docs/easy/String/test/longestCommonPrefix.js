var longestCommonPrefix = function (strs) {
    if (strs.length == 0 || strs[0].length == 0) return "";
    if (strs.length == 1) return strs[0];
    var index = 1, breaked = false;
    outer:
    while (index <= strs[0].length) {
        inter:
        var testStr = strs[0].substring(0, index)
        for (var i = 0, len = strs.length; i < len; i++) {
            var item = strs[i];
            if (item.indexOf(testStr) == 0) {
                continue;
            } else {
                breaked = true
                break outer;
            }
        }
        index++;

    }
    var strlen = testStr.length


    return breaked ? testStr.substring(0, strlen - 1) : testStr; //截掉最后一位
}

var src = ["c", "acc", "ccc"]

var res = longestCommonPrefix(src);

console.log(res)