class Queue {
    private data: number[];
    private front: number;
    private rear: number;
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.data = [];
        this.front = 0;
        this.rear = -1;
    }

    /**
     * isFull
     */
    public isFull(): boolean {
        return this.rear == this.capacity - 1;
    }

    /**
     * isEmpty
     */
    public isEmpty(): boolean {
        return this.front > this.rear;
    }

    /**
     * enque
     */
    public enqueue(item: number): void {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }

        if (this.front == -1) {
            this.front = 0;
        }

        this.rear++;
        this.data[this.rear] = item;
    }

    /**
     * dequeue
     */
    public dequeue(): number {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return 0;
        }

        let item: number = this.data[this.front];
        this.front++;

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = -1;
        }

        return item;

    }

    /**
     * peek
     */
    public peek(): number {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return 0;
        }
        return this.data[this.front];
    }

    /**
     * print
     */
    public print(): void {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return;
        }

        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.data[i]);
        }
    }

    /**
     * len
     */
    public length(): number {
        return this.data.length
    }

}


const q = new Queue(3);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// q.enqueue(4); // error is full

q.dequeue();
console.log("Front: ", q.peek());
console.log("Empty: ", q.isEmpty());

console.log("--------------");
q.print()




