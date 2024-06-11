export class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(data) {
        const node = new Node(data, null, this.head);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.head.prev = node;
        this.head = node;
    }

    addLast(data) {
        const node = new Node(data, this.tail, null);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    removeFirst() {
        if (!this.head) {
            console.log("Doubley linked list is empty!");
        }

        if (!this.head.next) {
            this.head = null;
        }

        this.head = this.head.next;
        this.head.prev = null;
    }

    map(callback) {
        let currentNode = this.head;
        for (let i = 0; currentNode; i++) {
            callback(currentNode.data, i);
            currentNode = currentNode.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    getNodeWithKey(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === key) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    insertAfterNode(data, node) {
        const newNode = new Node(data, node, node.next);
        node.next.prev = newNode
        node.next = newNode;
    }
}

const dll = new DoubleLinkedList();
dll.addFirst(4);
dll.addFirst(3);
dll.addFirst(2);
dll.addFirst(1);
dll.addLast(5);
const node = dll.getNodeWithKey(2);
dll.insertAfterNode(10, node);
dll.map((e) => console.log(e));