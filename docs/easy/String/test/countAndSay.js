//递归，知道n-1行的，就知道n行的

var countAndSay = function (n) {
    //第一行就直接输出
    if (n == 1) {
        return "1";
    }
    //得到上一行的字符串
    var last = countAndSay(n - 1);
    //输出当前行的字符串
    return getNextString(last);

}

function getNextString(last) {
    //长度为 0 就返回空字符串
    if (last.length == 0) {
        return "";
    }
    //得到第 1 个字符重复的次数
    var num = getRepeatNum(last);
    // 次数 + 当前字符 + 其余的字符串的情况
    return num + "" + last.charAt(0) + getNextString(last.substring(num));
}

//得到字符 string[0] 的重复个数，例如 "111221" 返回 3
function getRepeatNum(string) {
    var count = 1;
    var same = string.charAt(0);
    for (var i = 1; i < string.length; i++) {
        if (same == string.charAt(i)) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

var res = countAndSay(10)

console.log('结果:', res)