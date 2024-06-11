export class Queue {
    constructor() {
        this.queue = [];
    }

    push(element) {
        this.queue.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            throw Error("Queue is empty!");
        }
        else {
            this.queue.shift();
        }
    }

    atTop() {
        return this.queue[0];
    }

    atBottom() {
        return this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    clear() {
        this.queue = [];
    }

    map(callback) {
        this.queue.map(callback)
    }
}