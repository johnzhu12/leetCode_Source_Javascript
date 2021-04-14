# 阿里面试一面题目

1. 123456 => 123,456
   //
   replace(/\d{3}/g,',')

看了下答案

```js
str.replace(/\B(?=(?:\d{3})+\b)/g, ',')
```

> 例如：str = '1234',输出结果为'1,234'
> \B 匹配不是单词开头或者结束的位置
> (?=exp)匹配 exp 前面的位置
> (?:exp)匹配 exp，不捕获匹配的文本，也不给此分组分配组号
> \b 代表单词分界位置

2. 数组的笛卡尔积

[[0,1],[2,3,4],[5,6]] => [[0,2,5],[0,2,6],[1,2,5]...]

reduce:

```js
function decare(nums) {
  let res = nums.reduce((last, el) => {
    const arr = []
    // last：上次运算结果
    // el：数组中的当前元素
    last.forEach((e1) => {
      el.forEach((e2) => {
        arr.push(e1 + '_' + e2)
      })
    })
    return arr
  })
  res = res.map((item) => item.split('_'))
  return res
}
```

回溯法,不要想复杂了，不需要置为\*等手段，并不会走回头路

```js
function decare(nums) {
  let len = nums.length
  let res = []
  let track = []
  function backtrace(nums, row) {
    if (row == len && track.length == len) {
      res.push([...track])
      return
    }
    let n = nums[row].length //当前列的长度
    for (var i = 0; i < n; i++) {
      //遍历列
      var a = nums[row][i] //当前元素
      track.push(a)
      backtrace(nums, row + 1)
      track.pop()
    }
    return
  }
  backtrace(nums, 0)
  return res
}
```

3. aaabbcccddccaaaaaaandw a => 7 c =>5

```js
function findMaxLen(str, target) {
  let len = str.length
  let index = 0
  let count = 0
  let res = 0
  let hintIndex = 0
  while (index < len) {
    if (str[index] != target) {
      //不同了
      res = Math.max(res, count)
      if (res == count) {
        //当前的最大
        hintIndex = index - count
      }
      count = 0
    } else {
      //命中target
      count++
    }
    index++
  }
  return hintIndex
}
```
