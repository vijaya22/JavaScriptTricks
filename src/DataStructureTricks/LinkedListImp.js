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
    * @return {Number}
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
     * @return {ListNode}
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
     * @return {ListNode}
     */
    getFirst() {
        return this.head;
    }

    /**
     * getAtIndex() - returns the node at the specified index
     * @param {number} index 
     * @return {ListNode}
     */
    getAtIndex(index) {
        let indexNode = this.head;
        let count = 0;
        if (indexNode) {
            while (count == index) {
                indexNode = indexNode.next;
            }
        }
        return indexNode;
    }

    /**
     * addAtIndex() - add the input node at the specified index in list
     * @param {number} index 
     */
    addAtIndex(index, node) {
        let prevNode = this.head;
        let nextNode = null;
        let count = 1;
        if (prevNode) {
            while (prevNode.next && count < index) {
                prevNode = prevNode.next;
                count++;
            }
            nextNode = prevNode.next;
            prevNode.next = node;
            node.next = nextNode;
        }

    }

    /**
     * addAtHead() - add the input node at the head of linked list
     * @param {ListNode} node 
     */
    addAtHead(node) {
        let start = this.head;
        node.next = start;
        this.head = node;
    }

    /**
     * addAtTail() - add the input node at the end of the linked list
     * @param {ListNode} node
     */
    addAtTail(node) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        else {
            this.head = node;
        }
    }

    /**
     * deleteAtIndex() - delete node present at the specified index
     * @param {Number} index
     */
    deleteAtIndex(index) {
        let prevNode = this.head;
        let nextNode = this.head;
        let count = 1;
        while (prevNode.next && count < index) {
            prevNode = prevNode.next;
            count++;
        }
        nextNode = prevNode.next.next;
        prevNode.next = nextNode;
    }

    printAllNodeValues() {
        let node = this.head;
        let result = "";
        if (node) {
            while (node.next) {
                result += node.val;
                result += " -> ";
                node = node.next;
            }
            result += node.val;
        }

        console.log("linked list::::", result);
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

console.log('last node:::', list.getLast().val);
console.log('first node::', list.getFirst().val);

list.clear();
console.log('when empty::', list);

let linList = new LinkedList();
let lNode1 = new ListNode(1);
linList.addAtTail(lNode1);
console.log('add:');
linList.printAllNodeValues();

let lNode2 = new ListNode(2);
linList.addAtTail(lNode2);
console.log('add at tail:');
linList.printAllNodeValues();

let lNode3 = new ListNode(3);
linList.addAtHead(lNode3);
console.log('add at head:');
linList.printAllNodeValues();

let lNode4 = new ListNode(4);
linList.addAtIndex(1, lNode4);
console.log('add at index 1:');
linList.printAllNodeValues();

let lNode5 = new ListNode(5);
linList.addAtIndex(2, lNode5);
console.log('add at index 2:');
linList.printAllNodeValues();

linList.deleteAtIndex(1);
console.log('delete at index 1:');
linList.printAllNodeValues();


