"use strict";
class StackArrGeneric {
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
const StackStr = new StackArrGeneric(3);
StackStr.push("Reynaldo");
StackStr.push("Ana");
StackStr.push("Sofia");
console.log(StackStr.peek());
StackStr.pop();
console.log(StackStr.peek());
console.log("Len :", StackStr.length());
StackStr.print();
console.log("---------------------");
const StackObj = new StackArrGeneric(2);
StackObj.push({ name: "Reynaldo", age: 50 });
StackObj.push({ name: "Sofia" });
StackObj.print();
