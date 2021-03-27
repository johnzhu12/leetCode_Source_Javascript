# 阿里面试

1. 123456 => 123,456
   //
   replace(/\d{3}/g,',')

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
