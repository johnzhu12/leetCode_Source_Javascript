# [实现strStr](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/38/)

![strStr](./imgs/strStr.png)

```js
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    return haystack.indexOf(needle)
};
```