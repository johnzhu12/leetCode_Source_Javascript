/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let str = '',             // 正向
        str_reverse = ''      // 反向
    while (head) {
        str += head.val;
        str_reverse = head.val + str_reverse;
        head = head.next;
    }
    return str === str_reverse;
};