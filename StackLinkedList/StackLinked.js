"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class StackList {
    constructor(size) {
        this.top = null;
        this.size = size;
        this.len = 0;
    }
    isFull() {
        return this.len == this.size;
    }
    push(data) {
        const newNode = new Node(data);
        if (this.isFull()) {
            console.log("Could not push element");
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
        this.len++;
    }
    isEmpty() {
        return this.len == 0;
    }
    pop() {
        if (this.isEmpty()) {
            return 0;
        }
        let top = this.top;
        if (top != null) {
            this.top = top.next;
            this.len--;
        }
        return top.data;
    }
    peek() {
        if (this.isEmpty()) {
            return 0;
        }
        return this.top.data;
    }
    length() {
        return this.len;
    }
    print() {
        let current = this.top;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const stackList = new StackList(3);
stackList.push(1);
stackList.push(2);
stackList.push(3);
console.log("print");
stackList.print();
console.log("top:  ", stackList.peek());
console.log("delete top");
stackList.pop(); // delete 3
console.log("top:  ", stackList.peek());
