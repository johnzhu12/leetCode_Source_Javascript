

var minWindow = function (s, t) {
    let need = new Map();
    let window = new Map();
    for (let i = 0; i < t.length; i++) {
        let c = t[i];
        if (need.has(c)) {
            let v = need.get(c)
            v++;
            need.set(c, v)
        } else {
            need.set(c, 1)
        }
    }
    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        // c 是将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need.has(c)) {
            if (window.has(c)) {
                let v = window.get(c)
                v++;
                window.set(c, v)
            } else {
                window.set(c, 1)
            }

            if (window.get(c) == need.get(c))
                valid++;
        }

        // 判断左侧窗口是否要收缩
        while (valid == need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (window.get(d) == need.get(d))
                    valid--;
                let v = window.get(d)
                v--;
                window.set(d, v)
            }
        }
    }
    // 返回最小覆盖子串
    return len == Infinity ? "" : s.substr(start, len);
}

var S1 = "ADOBECODEBANC"
var T1 = "ABC"
var res1 = minWindow(S1, T1)
console.log(res1)
// var S2 = "a"
// var T2 = "a"
// var res2 = minWindow(S2, T2)
// console.log(res2)