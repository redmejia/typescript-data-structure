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
// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }
    // append
    append(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
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
    // traverse
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.append(1);
numberList.append(2);
numberList.print();
const stringList = new LinkedList();
stringList.append("Hola");
stringList.append("Hello");
stringList.delete();
stringList.print();
const personList = new LinkedList();
personList.append({ name: "Reynaldo", age: 56 });
personList.append({ name: "Alexandra", age: 23 });
personList.append({ name: "Robert" });
console.log(personList);
personList.delete();
personList.print();
