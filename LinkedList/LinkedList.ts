export class Node {
    item: number;
    next: Node | null;

    constructor(item: number) {
        this.item = item;
        this.next = null;
    }
}

export class LinkedList {

    private head: Node | null;
    private tail: Node | null;
    private len: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    // append
    public append(item: number): void {
        const newNode: Node = new Node(item);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.len++;

    }

    // delete 
    public delete(): void {
        if (this.head != null) {
            this.head = this.head.next;
            this.len--;
            return;
        }
    }

    // size
    public size(): number {
        return this.len;
    }

    // print 
    public print(): void {

        let current: Node | null = this.head;

        while (current != null) {
            console.log(current.item);
            current = current.next;
        }

    }
}


const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);


myList.delete();

console.log(myList)