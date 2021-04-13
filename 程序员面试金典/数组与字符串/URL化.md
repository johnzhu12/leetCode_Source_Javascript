# [URL 化](https://leetcode-cn.com/problems/string-to-url-lcci/)

## 思路

```js
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  return encodeURI(S.substring(0, length))
}
```

```js
var replaceSpaces = function (S, length) {
  return S.substr(0, length).split(' ').join('%20')
}
```

```js
var replaceSpaces = function (S, length) {
  return S.substr(0, length).replace(/\s/g, '%20')
}
```
