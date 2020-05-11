# [删除链表的倒数第N个节点](https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/42/)

![removeNthFromEnd](./imgs/removeNthFromEnd.png)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let first = head, second = head;
    while (n > 0) {
        first = first.next
        n--
    }
    if (!first) return head.next;     // 删除的是头节点
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head
};

```