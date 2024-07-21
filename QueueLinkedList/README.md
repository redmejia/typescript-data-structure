# Queue
A Queue is a data structure that follows principle FIFO (First In, First Out).This means that the first element added to the queue (often called the front) will be the first one to be removed. The last element added (often referred to as the rear or tail) is the one at the opposite end. Queues can be efficiently implemented using either Linked Lists or Arrays.

# Queue Methods
queue: Add new element to the back (rear).

Dequeue: Remove the front element of the queue.

Peek: Get the front element without removing it.

IsEmpty: Check if the queue is empty.

IsFull: Check if the queue is full by checking the capacity of the queue.

# Queue Linked List implementation
The code implements a queue using a linked list. A queue is a FIFO (First In, First Out) data structure, where the first element added to the queue is the first element to be removed. The linked list is a linear data structure where each element is a separate object. Each element (or node) in a linked list contains data and a reference (or pointer) to the next node in the list.

The code defines two classes: Node and QueueLinkedList.

The Node class represents a single node in the linked list. It has two properties:

data: The data stored in the node.
next: A reference to the next node in the linked list.
```typescript
export class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}
```

The QueueLinkedList class represents the queue itself. It has the following properties:

capacity: The maximum number of elements that can be stored in the queue.
front: A reference to the first node in the queue.
rear: A reference to the last node in the queue.
length: The current number of elements in the queue.
```typescript
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
}
```


The QueueLinkedList class also has the following methods:

isFull(): Returns true if the queue is full, false otherwise.
```typescript
public isFull(): boolean {
        return this.length == this.capacity;
}
```
isEmpty(): Returns true if the queue is empty, false otherwise.
```typescript
  public isEmpty(): boolean {
        return this.length == 0;
    }
```

enqueue(item): Adds an item to the back of the queue.
```typescript
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

```
dequeue(): Removes and returns the item at the front of the queue.
```typescript
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
    
```
peek(): Returns the item at the front of the queue without removing it.
```typescript
 public peek(): number | undefined {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return undefined;
        }
        return this.front!.data;
    }
```
size(): Returns the number of elements in the queue.
```typescript
 public size(): number {
        return this.length;
    }
```
print(): Prints the contents of the queue.
```typescript
  public print(): void {
        let current: Node | null = this.front;
        while(current !=  null) {
            console.log(current.data);
            current = current.next;
        }
    }
```
