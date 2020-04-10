var isPalindrome = function (s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9]/g, "")
    if (s.split("").reverse().join("") == s) {
        return true;
    } else {
        return false;
    }
};

var s = "0P"
var res = isPalindrome(s)
console.log(res)