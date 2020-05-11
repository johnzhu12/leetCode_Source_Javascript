var isAnagram = function (s, t) {
    s = unescape(s);  //Unicode解码
    t = unescape(t);  //Unicode解码
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    if (s == t) {
        return true;
    } else {
        return false;
    }
};

var s = "anagram中国"
s = escape(s)
var t = "中nagar国am"
var res = isAnagram(s, t)
console.log(res)