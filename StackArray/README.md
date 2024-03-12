# Stack

Stack is a linear data structure that follows the principle of LIFO (Last In, First Out). This means that the last element inserted in the stack is the first element removed. 

Stacks can be implemented using arrays or linked lists.

## Stack Operations Method
Push: Add new element to top.

Pop: Removes an element from the top of the stack.

IsEmpty: Returns true or false if the stack is empty.

Peek: Get the last entry (top) from the stack.

Print: This method displays all elements in the stack array.

# Array Implementation 
We have created a new class named Stack with three private properties: data, top, and size. Additionally, we introduced STACK_EMPTY which is a readonly property and the initial of our stack.

In the constructor, which takes a size parameter, we assign values to the data, top, and size properties.

The push method checks if the stack is full before adding a new element to the top. If the stack is full, the operation is aborted; otherwise, we increment the top by one and insert the new element.

The isFull method is private and only used within the class. It checks if the size is equal to the top and returns true or false accordingly.

The isEmpty method checks whether the top has the length or the same number of elements as those pushed to the stack.

The peek method accesses the top element using its index position.

The length method returns the size by returning the top plus one.

The print method displays all elements in the stack using a for loop that iterates over each element in the stack array.

```typescript
class Stack {

    private data: number[];
    private top: number;
    private size: number;
    private readonly STACK_EMPTY = -1;

    constructor(size: number) {
        this.data = [];
        this.top = this.STACK_EMPTY;
        this.size = size
    }


    public push(item: number): void {

        if (this.isFull()) {
            console.log("could not push element");
            return;
        }else{
            this.top++;
            this.data[this.top] = item
        }
    }

    private isFull(): boolean {
        return this.top == this.size - 1;
    }

    public isEmpty(): boolean {
        return this.top == this.STACK_EMPTY;
    }

    public peek(): number {
        return this.data[this.top];
    }

    public pop(): number {
        if (this.isEmpty()) {
            return this.STACK_EMPTY;
        }

        let item: number = this.data[this.top];
        this.top--;
        return item;
    }

    public length(): number {
        return this.top + 1;
    }

    public print(): void {
        for (let index = 0; index <= this.top; index++) {
            console.log(this.data[index]);
        }
    }

}

const stack = new Stack(3);

stack.push(1);

console.log("empty: ",stack.isEmpty());

stack.push(2);
stack.push(3);

stack.pop() // delete 3

stack.push(4);

console.log("len: ",stack.length());

console.log("print");

stack.print();
// 4
console.log("top: ",stack.peek());
```

