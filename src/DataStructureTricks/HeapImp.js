/** Min Heap Implementation -  */
class TreeNode {
    constructor(ele) {
        this.val = ele;
        this.left = null;
        this.right = null;
    }
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    heapify() {

    }

    getMin() {
        return this.heap[1]
    }

    extractMin() {
        this.heap[1]
        //
    }

    decreaseKey() {

    }

    /**
     * insert an element to correct position in heap
     * @param {Number} ele 
     */
    insert(ele) {
        this.heap.push(new TreeNode(ele));
        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            /* Traversing up the parent node until
             * the current node (current) is greater than the parent (current/2) 
             */
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
                let temp = this.heap[Math.floor(current / 2)];
                this.heap[Math.floor(current / 2)] = this.heap[current];
                this.heap[current] = temp;
            }
        }

    }

    delete() {
        let smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length == 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) {

                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    current = leftChildIndex;
                }
                else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = 2 * current;
                rightChildIndex = 2 * current + 1;
            }
        }

        if (this.heap.length == 2) {
            this.heap.splice(1, 1)
        }
        else {
            return null
        }

        return smallest;
    }
}



