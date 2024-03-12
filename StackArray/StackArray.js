"use strict";
class Stack {
    constructor(size) {
        this.STACK_EMPTY = -1;
        this.data = [];
        this.top = this.STACK_EMPTY;
        this.size = size;
    }
    push(item) {
        if (this.isFull()) {
            console.log("could not push element");
            return;
        }
        else {
            this.top++;
            this.data[this.top] = item;
        }
    }
    isFull() {
        return this.top == this.size - 1;
    }
    isEmpty() {
        return this.top == this.STACK_EMPTY;
    }
    peek() {
        return this.data[this.top];
    }
    pop() {
        if (this.isEmpty()) {
            return this.STACK_EMPTY;
        }
        let item = this.data[this.top];
        this.top--;
        return item;
    }
    length() {
        return this.top + 1;
    }
    print() {
        for (let index = 0; index <= this.top; index++) {
            console.log(this.data[index]);
        }
    }
}
const stack = new Stack(3);
stack.push(1);
console.log("empty: ", stack.isEmpty());
stack.push(2);
stack.push(3);
stack.pop(); // delete 3
stack.push(4);
console.log("len: ", stack.length());
console.log("print");
stack.print();
// 4
console.log("top: ", stack.peek());
