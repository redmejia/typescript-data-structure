"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }
    // append
    append(item) {
        const newNode = new Node(item);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.len++;
    }
    // delete 
    delete() {
        if (this.head != null) {
            this.head = this.head.next;
            this.len--;
            return;
        }
    }
    // size
    size() {
        return this.len;
    }
    // print 
    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.item);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
const myList = new LinkedList();
myList.append(1);
myList.append(2);
console.log(myList);
