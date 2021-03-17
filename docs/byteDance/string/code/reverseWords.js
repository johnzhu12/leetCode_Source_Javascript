function reverseWords(s) {
    let str = s.trim();
    let strArr = str.split(" ").filter(element => {
        return element != ''
    });
    return strArr.reverse().join(" ")
}

var src = "  Bob    Loves  Alice   "

var res = reverseWords(src)
console.log(res)