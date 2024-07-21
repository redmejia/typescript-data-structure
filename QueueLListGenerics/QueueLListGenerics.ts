export class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList<T> {

    private front: Node<T> | null;
    private rear: Node<T> | null;
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

    public enqueue(item: T) : void {
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        const newNode: Node<T> = new Node(item);

        if(this.isEmpty()) {
            this.front = newNode;
        }else{
            this.rear!.next = newNode;
        }

        this.rear = newNode;
        this.length++;
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            console.log("Cann't dequeue from empty queue");
            return undefined;
        }

        const dequeueItem: T = this.front!.data
        this.front = this.front!.next

        if(this.isEmpty()){
            this.rear = null;
        }

        this.length--;
        return dequeueItem
    }
    
    public peek(): T | undefined {
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
        let current: Node<T> | null = this.front;
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

console.log("------------------");


const qs = new QueueLinkedList<string>(2);
qs.enqueue("Hello");
qs.enqueue("Mundo");

console.log("SIZE: ", qs.size());
console.log("PEEK: ", qs.peek());
console.log("IS EMPTY: ", qs.isEmpty());

qs.print();
