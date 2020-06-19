import LinkedList from '../../../lib/data-structures/linkedList/LinkedList.js'
import LinkedListNode from '../../../lib/data-structures/linkedList/LinkedListNode.js'
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//     var ans = new LinkedListNode(0);
//     var overflow = 0; //进位
//     //相加
//     while (l1.next && l2.next) {
//         ans.val = l1.val + l2.val + overflow;
//         if (ans.val > 9) {
//             ans.val = ans.val % 10;
//             overflow = 1;
//         } else {
//             overflow = 0;
//         }
//         l1 = l1.next;
//         l2 = l2.next;
//         ans = ans.next;
//     }
//     //把剩余的补上
//     while (l1.next) {
//         ans.next = l1.next;
//         l1 = l1.next;
//         ans = ans.next;
//     }
//     while (l2.next) {
//         ans.next = l1.next;
//         l2 = l2.next;
//         ans = ans.next;
//     }
//     return ans
// };
var addTwoNumbersTest = function (l1, l2) {
    var l1 = l1.head, l2 = l2.head;
    var ans = new LinkedListNode(0);
    var ansP = ans;
    var overflow = 0; //进位
    //相加
    while (l1 && l2) {
        var cur = new LinkedListNode(0); //定义一个节点
        cur.value = l1.value + l2.value + overflow;
        if (cur.value > 9) {
            cur.value = cur.value % 10;
            overflow = 1;
        } else {
            overflow = 0;
        }
        l1 = l1.next;
        l2 = l2.next;

        ansP.next = cur
        ansP = ansP.next
    }
    //把剩余的补上
    while (l1) {
        ans.next = l1.next;
        l1 = l1.next;
        ans = ans.next;
    }
    while (l2) {
        ans.next = l1.next;
        l2 = l2.next;
        ans = ans.next;
    }
    return ans.next
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new LinkedList();
l1.fromArray([2, 4, 3]);

const l2 = new LinkedList();
l2.fromArray([5, 6, 4]);

addTwoNumbersTest(l1, l2)