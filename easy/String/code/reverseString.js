var reverseString = function (s) {
    let len = Math.floor(s.length / 2)
    for (let i = 0; i < len; i++) {
        let item = s[i]
        //交换位置
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
};


var src = ['o', 'l', 'l', 'e', 'h']

reverseString(src)

console.log(src)