export class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    addlast(data) {
        const node = new Node(data);
        if (!this.head) { this.head = node; return; }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = node;
    }

    deleteFirst() {
        if (!this.head) {
            console.log("Linked list is already empty!")
            return;
        }
        this.head = this.head.next;
    }

    deleteLast() {
        if (!this.head) {
            console.log("Linked list is already empty!");
            return;
        }

        if (!this.head.next) { this.head = null; return; }
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }

    insertAfter(key, data) {
        let last = this.head;
        while (last.data !== key) {
            last = last.next;
        }
        const node = new Node(data, last.next);
        last.next = node;
    }

    insertBefore(key, data) {
        let last = this.head;
        if (last.data === key) {
            const node = new Node(data, last);
            this.head = node;
            return;
        }
        while (last.next.data !== key) {
            last = last.next;
        }
        const node = new Node(data, last.next);
        last.next = node;
    }

    deleteWithKey(key) {
        if (!this.head) {
            console.log("Linked list is empty!")
            return;
        }

        if (this.head.data === key) {
            this.head = null;
            return;
        }

        let currentNode = this.head

        while (currentNode.next.data !== key) {
            currentNode = currentNode.next;
        }

        currentNode.next = currentNode.next.next;
    }

    map(callback) {
        let currentNode = this.head;
        for (let i = 0; currentNode; i++) {
            callback(currentNode.data, i);
            currentNode = currentNode.next;
        }
    }

    getNode(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === key) return currentNode;
            currentNode = currentNode.next;
        }
        return;
    }

    indexOf(key) {
        let currentNode = this.head;
        for (let index = 0; currentNode; index++) {
            if (currentNode.data === key) return index;
            currentNode = currentNode.next;
        }
        return false;
    }

    includes(key) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === key) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    insertAfterNode(data, prevNode) {
        if (!prevNode) {
            console.log("Please provide previews node!");
            return;
        }
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    reverse() {
        let currentNode = this.head;
        let Pnode = null;
        let Nnode = null;
        while (currentNode) {
            Nnode = currentNode.next;
            currentNode.next = Pnode;
            Pnode = currentNode;
            currentNode = Nnode;
        }
        this.head = Pnode;
    }

    clear() {
        this.head = null;
    }
}