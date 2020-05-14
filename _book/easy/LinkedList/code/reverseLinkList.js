
import LinkedList from '../../../lib/data-structures/linkedList/LinkedList.js'
var reverseList = function (head) {
    let node = head,
        previous = null,
        tmp = null;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;

        // reverse pointer
        node.next = previous;

        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
};

const linkedList = new LinkedList();
linkedList.fromArray([1, 2, 3, 4, 5, 6, 7]);

// console.log(linkedList.toString());

var list = new LinkedList();


var listHead = reverseList(linkedList.head)
var cur = listHead, tmp;
list.append(cur.value)
while (cur.next) {
    tmp = cur.next
    list.append(tmp.value)
    cur = tmp;
}

console.log(list.toString());




