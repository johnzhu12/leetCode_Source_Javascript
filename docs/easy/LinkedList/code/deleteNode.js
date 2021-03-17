/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {

    //因为要删除节点，所以我们将节点的下一个节点赋值给nextNode
    var nextNode = node.next;
    //将下个节点的值赋给节点
    node.val = nextNode.val;
    //将下个节点的指向赋给节点
    node.next = nextNode.next;

};