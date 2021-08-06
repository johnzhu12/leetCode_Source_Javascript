Array.prototype.filter = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or not undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    const res = [];
    // 让O成为回调函数的对象传递（强制转换对象）
    const obj = Object(this);
    // >>>0 保证len为number，且为正整数
    const len = obj.length >>> 0;
    for (let i = 0; i < len; i++) {
        // 检查i是否在O的属性（会检查原型链）
        if (i in obj) {
            // 回调函数调用传参
            if (callback.call(thisArg, obj[i], i, obj)) {
                res.push(obj[i]);
            }
        }
    }
    return res;
}

var arr = [5, 2, 3]
var res = arr.filter(item => item == 1, [2, 4, 5, 6, 1])
console.log(res)