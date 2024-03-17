export class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class StackList {
    private top: Node | null;
    private size: number;
    private len: number;

    constructor(size: number) {
        this.top = null;
        this.size = size;
        this.len = 0
    }

    private isFull(): boolean {
        return this.len == this.size;
    }

    public push(data: number): void {
        const newNode: Node = new Node(data);
        if (this.isFull()) {
            console.log("Could not push element");
            return;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.len++;
    }

    public isEmpty(): boolean {
        return this.len == 0;
    }

    public pop(): number {
        if (this.isEmpty()) {
            return 0;
        }
        let top = this.top;
        if (top != null) {
            this.top = top.next
            this.len--;
        }

        return top!.data;
    }

    public peek(): number {
        if (this.isEmpty()) {
            return 0;
        }

        return this.top!.data;
    }

    public length(): number {
        return this.len;
    }

    public print(): void {
        let current: Node | null = this.top;
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




