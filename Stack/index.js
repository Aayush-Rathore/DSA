export class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw Error("Stack is empty!");
        }
        else {
            this.stack.pop();
        }
    }

    atTop() {
        return this.stack[this.stack.length - 1];
    }

    atBottom() {
        return this.stack[0];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    clear() {
        this.stack = [];
    }

    map(callback) {
        this.stack.map(callback)
    }
}