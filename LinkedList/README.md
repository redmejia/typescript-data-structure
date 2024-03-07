# Linked List
A Linked List is a linear data structure used for storing a collection of elements. Imagine a linked list as a chain where each element is connected. Unlike arrays, 
Linked Lists use nodes to store data.

A node in a Linked List is a block that holds the data and points to the next node.

# Head And Tail
The first element in a Linked List is called the head and is the starting point. The head points to the next node in the linked list.
The tail is the last element in the linked list and points to a null value.

# Linked List Methods

### Basics Methods
add(item): 
Adds a new element to the beginning or end of the list.\
remove(): 
Removes an element from the beginning or end of the list.\
size():
Returns the length of the list.

# Node Class
A node class is a single node  in the Linked List, holding data and reference to next node.
The item is the data value store in the node for this example the data type is number. The next property  is a pointer to next node int list, or null if the node is the last element.
In the contractor initialize a new Node with the item value and set next to null.

```typescript
export class Node {
    item: number;
    next: Node | null;

    constructor(item: number) {
        this.item = item;
        this.next = null;
    }
}
```

# Linked List Class and Methods
The Linked List class manage the collection of nodes.
The head property is a pointer to the first element in the list, or null if is empty.
The tail property is a pointer to the last element in the list.
The len property is number of nodes in the list.

The contractor initialize the values head and tail to null and len to 0.

### Append
Append method, first create a new Node with the provided item.
Second, if the list is empty head is null, we set head and tail to new created node.
Otherwise, we set next pointer to the current tail node to pint the new node, and update tail to point the new appended node. Last we increment the length by one.

### Delete
Delete method, Removing the first node(head) from linked list.
First check if list is empty ( head is not null ), we point the head to the next node in the list.

### Size
The size method return the current number of nodes in the linked list. This method simply return the value of len property.

### Traverse 
Traversing or print. First create a current node variable initialize to the head of the list.
We loop, While current is not null than we print value of current node value (item), move current to the next node using current.next.
```typescript
export class LinkedList {

    head: Node | null;
    tail: Node | null;
    len: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    // append
    public append(item: number): void {
        const newNode = new Node(item);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.len++

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

    // traverse
    public print(): void {
        let current: Node | null = this.head;

        while (current != null) {
            console.log(current.item);
            current = current.next;
        }

    }
}
```