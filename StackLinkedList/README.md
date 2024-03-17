# Stack Linked List Implementation

We begin by creating a Node class with data and next properties. The constructor for the node takes a data parameter, which is then assigned to the data property.

Next, we define a new class named StackList, which contains properties such as top, size, and length. In the constructor, we initialize these properties with appropriate values.

The isFull method checks whether the length of the stack is equal to its size.

The push method adds a new node to the top of the stack. We first verify if the stack is not full. If it's not full, we create a new node and add it to the top, then increment the length by one.

The isEmpty method checks if the stack is empty by verifying if its length is zero.

In the pop method, we remove the top node from the stack. We check if the stack is not empty and if the top node is not null. If these conditions are met, we update the top to the next node and decrement the length by one.

The peek method retrieves the value of the top node without removing it. We verify if the stack is not empty and if the top node is not null, then return the value of the top node.

The length method returns the length of the stack by returning the value of the len counter.

Finally, the print method iterates over the stack. We initialize a current variable with the value of the top node, then loop through the stack as long as the next node is not null.

```typescript
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
```




