/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var ans = [[strs[0]]]; //先放一个元素
    var len = strs.length;
    var hasGrouped = false
    for (var i = 1; i < len; i++) {
        var item = strs[i]
        hasGrouped = false;
        ans.forEach(arrItem => {  //每一个组
            if (isAnagrams(arrItem[0], item)) {  //只需要取第一个元素判断下
                arrItem.push(item);
                hasGrouped = true;
            }
        })
        if (!hasGrouped) {  //如果都没有的话
            var newArr = [item];
            ans.push(newArr)
        }

    }

    return ans;
};

var isAnagrams = function (s1, s2) {
    var s1Tem = s1.split("").sort().join("")
    var s2Tem = s2.split("").sort().join("")
    return s1Tem == s2Tem
}

var src = ["eat", "tea", "tan", "ate", "nat", "bat"]

var res = groupAnagrams(src)

console.log(res)