export class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {

    private front: Node | null;
    private rear: Node | null;
    private capacity: number;
    private length: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    public isFull(): boolean {
        return this.length == this.capacity;
    }

    public isEmpty(): boolean {
        return this.length == 0;
    }

    public enqueue(item: number) : void {
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        const newNode = new Node(item);

        if(this.isEmpty()) {
            this.front = newNode;
        }else{
            this.rear!.next = newNode;
        }

        this.rear = newNode;
        this.length++;
    }

    public dequeue (): number | undefined {
        if (this.isEmpty()) {
            console.log("Cann't dequeue from empty queue");
            return undefined;
        }

        const dequeueItem: number = this.front!.data
        this.front = this.front!.next

        if(this.isEmpty()){
            this.rear = null;
        }

        this.length--;
        return dequeueItem
    }
    
    public peek(): number | undefined {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return undefined;
        }
        return this.front!.data;
    }

    public size(): number {
        return this.length;
    }

    public print(): void {
        let current: Node | null = this.front;
        while(current !=  null) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const q = new QueueLinkedList(3);

q.enqueue(1);
q.enqueue(145);
q.enqueue(3);
// q.enqueue(4); // full

q.dequeue();
console.log("SIZE: ", q.size());
console.log("PEEK: ", q.peek());
console.log("IS EMPTY: ", q.isEmpty());

console.log("------------------");
q.print();






