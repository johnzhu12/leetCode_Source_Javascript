/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
    //判断是不是都是空格
    if (S.split("").every(item => item == " ")) {
        return S.replaceAll(" ", "%20")
    } else {
        return S.trim().replaceAll(" ", "%20")
    }
};

