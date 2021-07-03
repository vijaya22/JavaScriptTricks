/** Linked List Implementation -  */

class ListNode {
    constructor(ele) {
        this.val = ele;
        this.next = null;
    }
}

class LinkedList {

    constructor(head = null) {
        this.head = head
    }
    /**
    * size() - this method returns the size of the linked list.
    */
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    /**
     * clear() - this method empties out the list
     */
    clear() {
        this.head = null;
    }
    /**
     * getLast() - returns the last node of the linked list
     */
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    /**
     * getFirst() - returns the first node of the linked list
     */
    getFirst() {
        return this.head;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(1);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log('head val::', list.head.val);
console.log('second val:::', list.head.next.val);
console.log('third val:::', list.head.next.next.val);

console.log('size:::', list.size());

console.log('last node:::',list.getLast().val);
console.log('first node::',list.getFirst().val);

list.clear();
console.log('when empty::',list);
