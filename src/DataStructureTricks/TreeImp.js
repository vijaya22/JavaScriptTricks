class TreeNode {
    constructor(ele) {
        this.data = ele;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new TreeNode(data);
        if (this.root == null) {
            this.root = node;
        }
        else {
            this.insertNode(root, node);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete() {
        //this.root = 
    }
    deleteNode() {

    }

    /**
     * preOrderTraversal() - returns the pre order traversal of binary tree
     * @param {TreeNode} node 
     */
    preOrderTraversal(node) {
        if (node == null) return;
        console.log(` ${node.data} `);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    /**
     * postOrderTraversal() - returns the post order traversal of binary tree
     * @param {TreeNode} node 
     */
    postOrderTraversal(node) {
        if (node == null) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(` ${node.data} `);
    }

    /**
     * inOrderTraversal() - returns the in order traversal of binary tree
     * @param {TreeNode} node 
     */
    inOrderTraversal(node) {
        if (node == null) return;
        this.inOrderTraversal(node.left);
        console.log(` ${node.data} `);
        this.inOrderTraversal(node.right);
    }

    levelOrderTraversal(){

    }

    zigzagOrderTraversal() {

    }
    
    clone() {

    }
}

let root = new TreeNode(4);
root.left = new TreeNode(3);
root.right = new TreeNode(6);

let obj = new BinarySearchTree();
//obj.insert(3);
//obj.insert(1);
//obj.insert(6);
//obj.insert(2);
console.log('in order::::');
obj.inOrderTraversal(root);
console.log('preorder::::');
obj.preOrderTraversal(root);
console.log('post order traversal:::');
obj.postOrderTraversal(root);



