# [实现strStr](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/38/)

![strStr](./imgs/strStr.png)

## 思路

1. 用API直接可以
2. 用substr

```js
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    return haystack.indexOf(needle)
};
```

```js
var strStr = function(haystack, needle) {
    if(needle == '') return 0;
    let haystackArr = haystack.split('');
    let needleLen = needle.length;
    for(let i = 0,len = haystackArr.length;i<len ;i++){
        if(haystack.substr(i,needleLen) == needle){
           return i;
        }
    }
    return -1;
};
```