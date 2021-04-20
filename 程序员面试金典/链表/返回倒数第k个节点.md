# [返回倒数第 k 个节点](https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/)

## 思路

1. 这题比较简单，首先双指针，第一个先走 K 步，然后第二个从头部一起走，当第一个走到结尾时，第二个就在倒数第 K 个位置

```js
var kthToLast = function (head, k) {
  var first = head,
    second = head
  while (k-- > 0) {
    first = first.next //往后走k步
  }
  while (first.next) {
    first = first.next //往后走
    second = second.next
  }
  return second.val
}
```

2. 当然还有另一种比较低效率的方式，两遍遍历，知道整个链表长度也可以

```js
var kthToLast = function (head, k) {
  var pointer = head,
    count = 1

  //计算下总长度
  while (pointer.next) {
    pointer = pointer.next
    count++
  }
  pointer = head //重新置为head
  for (var i = 0; i < count - k; i++) {
    pointer = pointer.next
  }
  return pointer.val
}
```
